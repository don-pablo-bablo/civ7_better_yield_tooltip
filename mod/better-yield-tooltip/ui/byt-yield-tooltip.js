// The yield breakdown as a nested tooltip on the plot tooltip.
//
// In game: hover a tile of yours, press K to lock the plot tooltip, then hover the row of yield
// icons at its bottom. The breakdown opens beside it. Tap K; holding it hides tooltips instead.
// Escape closes it. The breakdown has no child tooltips, so it shows no Inspect line and cannot
// itself be locked.
//
// Why it hangs off YieldBar. A tooltip only nests if it is built inside the parent's Solid
// TooltipContext: the child registers itself in the parent's childTooltipList on mount
// (core/ui-next/components/tooltip.tsx), and the model will not stack anything outside that list
// (tooltip-model.ts). A separate Solid root beside the plot tooltip would replace it on hover
// rather than stack on it. So the code has to run inside the plot tooltip's component tree, and
// ComponentRegistry is the supported way in: the component registered with the highest priority
// is used (core/ui-next/services/component-registry.tsx).
//
// YieldBar is registered (base-standard/ui-next/components/yield-bar.tsx) and the plot tooltip
// draws it for every tile that produces anything. ConstructibleRow would be the obvious host, but
// it is not registered and cannot be replaced. So the override wraps YieldBar in a Tooltip whose
// trigger is the bar itself.
//
// Normal map hovering is unaffected: an unlocked tooltip's content has pointer-events-none
// (tooltip.tsx), so the trigger cannot be hovered until K locks the parent.
//
// Log and bail, never throw: a throw inside a Solid component takes the plot tooltip down with it.
// console.log does not reach UI.log; console.error does.
import { createComponent, untrack, useContext } from "../../core/vendor/solid-js/dist/solid.js";
import {
  Tooltip,
  TooltipContext,
  TooltipHorizontalPosition,
  TooltipVerticalPosition,
} from "../../core/ui-next/components/tooltip.js";
import { TooltipModel } from "../../core/ui-next/components/tooltip-model.js";
import { ComponentRegistry } from "../../core/ui-next/services/component-registry.js";
import { PlotCursor } from "../../core/ui/input/plot-cursor.js";
// Rendering lives in its own engine-free module so the mock page can draw it in a browser.
import { bytPanel, bytInfoBadge, bytMessage, bytNum, BYT_PANEL_BUILD }
  from "./byt-yield-panel.js";

// Build stamp. Bump it on every edit. Scripts load at game start, so an edit takes effect only
// after a restart; the stamp in UI.log shows which version is running.
const BYT_BUILD = "byt-14 24 Sep";

function bytt(line) {
  try { console.error(`[BYT] yield-tooltip: ${line}`); } catch (e) { /* nothing to do */ }
}

// ---------------------------------------------------------------------------------------------
// Which tile the breakdown is for.
//
// Not the tile under the cursor: to reach this tooltip the mouse has left the map. The plot
// tooltip's own target is the tile. Locking the plot tooltip freezes that target (in
// plot-tooltip.tsx, trySetPlotCoords and hidePlotTooltip return early while locked), and it
// triggers itself with the PlotCoord as target, so the model's getTarget returns it.
//
// Two fallbacks, since a slightly stale tile beats no answer: the last plot the cursor was over,
// then the live cursor.
let bytLastPlot = null;
try {
  window.addEventListener("plot-cursor-coords-updated", (event) => {
    try {
      const coords = event && event.detail ? event.detail.plotCoords : null;
      if (coords) bytLastPlot = { x: coords.x, y: coords.y };
    } catch (e) { /* not worth a log line per mouse move */ }
  });
} catch (e) { bytt(`could not watch the plot cursor: ${e}`); }

function bytTooltipPlot(parentCtx) {
  try {
    if (parentCtx && parentCtx.name) {
      const target = TooltipModel.get().getTarget(parentCtx.name);
      // A PlotCoord is a bare {x, y}; the other thing a target can be is an HTMLElement, which
      // has a nodeType and no numeric x.
      if (target && target.nodeType === undefined &&
          typeof target.x === "number" && typeof target.y === "number") {
        return { x: target.x, y: target.y, source: "the tooltip's own tile" };
      }
    }
  } catch (e) { bytt(`reading the parent tooltip's plot threw: ${e}`); }
  if (bytLastPlot) return { x: bytLastPlot.x, y: bytLastPlot.y, source: "the last tile hovered" };
  try {
    const live = PlotCursor.plotCursorCoords;
    if (live) return { x: live.x, y: live.y, source: "the tile under the cursor" };
  } catch (e) { /* fall through to nothing */ }
  return null;
}

// ---------------------------------------------------------------------------------------------
// Every tag each type carries, read once at load, for matching civ, leader and policy bonuses
// (which target buildings by tag) against the building in front of us. See below.
// ---------------------------------------------------------------------------------------------
const bytTagsByType = new Map();
try {
  for (const row of GameInfo.TypeTags) {
    if (typeof row.Tag !== "string") continue;
    let tags = bytTagsByType.get(row.Type);
    if (!tags) { tags = new Set(); bytTagsByType.set(row.Type, tags); }
    tags.add(row.Tag);
  }
} catch (e) { bytt(`could not read the type tags: ${e}`); }

// ---------------------------------------------------------------------------------------------
// Which of your bonuses can reach a building: civ and leader abilities, slotted policies and
// traditions, and the other sources below.
//
// The yield tree does not say. It lists "Player Bonus 2" with no source. The database does: the
// Mauryan ability Dhamma Thambha gives +2 Happiness to buildings tagged SCIENCE, and the policy
// Literature gives +2 Science to the same buildings.
//
// So each source's modifiers are read, and those that add a flat amount of a yield to buildings of
// a given tag or type are kept and matched against the building. Only slotted policies count: an
// unslotted one grants nothing.
//
// This is a lookup, not an evaluation. Requirements are not checked, so a match means the bonus
// can apply to this kind of building. It is named only where the amounts add up exactly (see
// bytPlotRows).
// ---------------------------------------------------------------------------------------------
let bytAbilityIndex = null;
let bytCityIndex = new Map();   // per settlement: bonuses from resources assigned to it
let bytSourcesByName = new Map();   // every source of yours by name, for icons

const bytSplit = (v) => (v ? String(v).split(",").map((x) => x.trim()).filter(Boolean) : []);

// What each modifier attaches, by id, from ModifierArguments rows named "ModifierId". A bonus often
// works through a modifier it attaches: the policy Princeps Civitatis attaches "+1 Production on
// the capital's urban tiles".
let bytAttached = null;

function bytAttachedTo(id) {
  if (!bytAttached) {
    bytAttached = new Map();
    try {
      for (const row of GameInfo.ModifierArguments) {
        if (row.Name === "ModifierId") bytAttached.set(row.ModifierId, bytSplit(row.Value));
      }
    } catch (e) { bytt(`attached scan threw: ${e}`); }
  }
  return bytAttached.get(id) || [];
}

// Modifiers that add a yield to tiles (EFFECT_PLOT_ADJUST_YIELD). Their arguments name no building;
// their requirements pick the plots, so they need their own index.
let bytPlotYieldModifiers = null;

function bytIsPlotYield(id) {
  if (!bytPlotYieldModifiers) {
    bytPlotYieldModifiers = new Set();
    try {
      const plotTypes = new Set();
      for (const d of GameInfo.DynamicModifiers) {
        if (d.EffectType === "EFFECT_PLOT_ADJUST_YIELD") plotTypes.add(d.ModifierType);
      }
      for (const m of GameInfo.Modifiers) {
        if (plotTypes.has(m.ModifierType)) bytPlotYieldModifiers.add(m.ModifierId);
      }
    } catch (e) { bytt(`plot modifier scan threw: ${e}`); }
  }
  return bytPlotYieldModifiers.has(id);
}

// Adds to `index` every modifier in `sources` (ModifierId to source) of the form "+Amount of
// YieldType to constructibles with Tag or ConstructibleType", and every tile yield modifier.
// Anything else, such as a percentage, is left out rather than guessed at.
function bytYieldModifiers(sources, index) {
  try {
    if (!sources.size) return;
    for (const source of sources.values()) {
      if (source && source.name && !bytSourcesByName.has(source.name)) bytSourcesByName.set(source.name, source);
    }
    // Credit what each source attaches to the source itself, two hops deep.
    for (const [id, source] of [...sources]) {
      for (const sub of bytAttachedTo(id)) {
        if (!sources.has(sub)) sources.set(sub, source);
        for (const subsub of bytAttachedTo(sub)) if (!sources.has(subsub)) sources.set(subsub, source);
      }
    }
    const args = new Map();
    for (const row of GameInfo.ModifierArguments) {
      if (!sources.has(row.ModifierId)) continue;
      let bag = args.get(row.ModifierId);
      if (!bag) { bag = {}; args.set(row.ModifierId, bag); }
      bag[row.Name] = row.Value;
    }
    for (const [modifierId, bag] of args) {
      if (!bag.YieldType || bag.Amount === undefined) continue;
      const plot = !bag.Tag && !bag.ConstructibleType;
      if (plot && !bytIsPlotYield(modifierId)) continue;
      const amount = Number(bag.Amount);
      if (!Number.isFinite(amount) || !amount) continue;
      const source = sources.get(modifierId) || {};
      const name = source.name ||
        (bag.Tooltip ? Locale.compose(bag.Tooltip) : modifierId);
      for (const yieldType of bytSplit(bag.YieldType)) {
        // `sid` is the source, not the modifier: one policy can come as several modifiers, and two
        // assigned resources can share a name.
        index.push({ tags: bytSplit(bag.Tag), types: bytSplit(bag.ConstructibleType), yieldType,
                     amount, name, icon: source.icon, icons: source.icons || null,
                     sid: source.sid || name, plot, tooltip: !!bag.Tooltip });
      }
    }
  } catch (e) { bytt(`modifier scan threw: ${e}`); }
}

// The icon for what kind of source a bonus is, since its name often does not say: the civ's symbol
// (`blp:civ_sym_<civ>`, as utilities-image.ts builds it), the leader's portrait, or a policy card
// icon. None of these may throw; a missing icon leaves a blank.
function bytCivIcon(civ) {
  try {
    if (!civ || !civ.CivilizationType) return null;
    return `url('blp:civ_sym_${String(civ.CivilizationType).replace("CIVILIZATION_", "").toLowerCase()}')`;
  } catch (e) { return null; }
}

function bytIconCSS(type, context) {
  try { return UI.getIconCSS(type, context) || null; } catch (e) { return null; }
}

// Your civ's and your leader's own abilities.
function bytTraitSources(player) {
  const sources = new Map();
  try {
    const traits = new Map();   // TraitType -> the icon for where it comes from
    const civ = GameInfo.Civilizations.lookup(player.civilizationType);
    if (civ) {
      const civIcon = bytCivIcon(civ);
      for (const row of GameInfo.CivilizationTraits) {
        if (row.CivilizationType === civ.CivilizationType) traits.set(row.TraitType, civIcon);
      }
    }
    const leader = GameInfo.Leaders.lookup(player.leaderType);
    if (leader) {
      const leaderIcon = bytIconCSS(leader.LeaderType, "LEADER");
      for (const row of GameInfo.LeaderTraits) {
        if (row.LeaderType === leader.LeaderType) traits.set(row.TraitType, leaderIcon);
      }
    }
    if (!traits.size) return sources;
    for (const row of GameInfo.TraitModifiers) {
      if (!traits.has(row.TraitType)) continue;
      const trait = GameInfo.Traits.lookup(row.TraitType);
      sources.set(row.ModifierId, {
        name: trait && trait.Name ? Locale.compose(trait.Name) : row.TraitType,
        icon: traits.get(row.TraitType),
      });
    }
  } catch (e) { bytt(`trait sources threw: ${e}`); }
  return sources;
}

// The policies and traditions in your slots, rather than every one unlocked. getActiveTraditions
// takes a slot type and returns the hashes in it (model-policies.ts). Every slot type is asked, so
// policies, traditions and crisis cards are all covered.
function bytTraditionSources(player) {
  const sources = new Map();
  try {
    const culture = player.Culture;
    if (!culture || typeof culture.getActiveTraditions !== "function") return sources;
    const slotTypes = typeof CultureSlotTypes !== "undefined"
      ? Object.values(CultureSlotTypes).filter((v) => typeof v === "number") : [];
    const active = new Set();
    for (const slot of slotTypes) {
      const inSlot = culture.getActiveTraditions(slot);
      if (inSlot) for (const hash of inSlot) active.add(hash);
    }
    if (!active.size) return sources;
    const names = new Map();
    for (const hash of active) {
      const def = GameInfo.Traditions.lookup(hash);
      if (!def) continue;
      names.set(def.TraditionType, {
        name: def.Name ? Locale.compose(def.Name) : def.TraditionType,
        // There is no sprite per card, so UI.getIconCSS(TraditionType, "TRADITION") draws nothing.
        // Use the two generic icons the game's policy cards use, chosen by slot (policy-card.tsx).
        icon: def.CultureSlotType === "TRADITION_CULTURE_SLOT"
          ? "url('blp:icon_tradition')" : "url('blp:icon_policy')",
      });
    }
    if (!names.size) return sources;
    for (const row of GameInfo.TraditionModifiers) {
      const source = names.get(row.TraditionType);
      if (source) sources.set(row.ModifierId, source);
    }
    bytt(`policies and traditions slotted: ${names.size}`);
  } catch (e) { bytt(`tradition sources threw: ${e}`); }
  return sources;
}

// Techs, civics and leader attributes, to the depth unlocked: a node's second level (mastery) has
// its own modifiers. depthUnlocked is what the game's tree screens read.
function bytNodeSources(player) {
  const sources = new Map();
  try {
    const pid = GameContext.localPlayerID;
    const depth = new Map();
    for (const row of GameInfo.ProgressionTreeNodeUnlocks) {
      if (row.TargetKind !== "KIND_MODIFIER") continue;
      let have = depth.get(row.ProgressionTreeNodeType);
      if (have === undefined) {
        try {
          const node = Game.ProgressionTrees.getNode(pid, row.ProgressionTreeNodeType);
          have = node && typeof node.depthUnlocked === "number" ? node.depthUnlocked : 0;
        } catch (e) { have = 0; }
        depth.set(row.ProgressionTreeNodeType, have);
      }
      if (have < (row.UnlockDepth || 1)) continue;
      const def = GameInfo.ProgressionTreeNodes.lookup(row.ProgressionTreeNodeType);
      sources.set(row.TargetType, bytNodeSource(def, row.ProgressionTreeNodeType));
    }
  } catch (e) { bytt(`node sources threw: ${e}`); }
  return sources;
}

// How a node is named and drawn. Leader attribute nodes have an empty Name, so they take their
// tree's name ("Economic Attribute Skills"), which is also what the yield tree shows. The icon is
// the attribute's own, found as the attribute screen finds it (model-attribute-trees.ts).
let bytAttributeIcons = null;

function bytNodeSource(def, nodeType) {
  let name = "";
  let icon = null;
  try {
    name = def && def.Name ? Locale.compose(def.Name) : "";
    const treeType = def ? def.ProgressionTree : null;
    if (treeType) {
      if (!name) {
        const tree = GameInfo.ProgressionTrees.lookup(treeType);
        name = tree && tree.Name ? Locale.compose(tree.Name) : "";
      }
      if (!bytAttributeIcons) {
        bytAttributeIcons = new Map();
        for (const a of GameInfo.Attributes || []) {
          if (a.ProgressionTreeType) bytAttributeIcons.set(a.ProgressionTreeType, bytIconCSS(a.AttributeType));
        }
      }
      icon = bytAttributeIcons.get(treeType) || null;
    }
  } catch (e) { /* a name is enough */ }
  return { name: name || null, icon, sid: `node:${nodeType}` };
}

// Legacy milestones you have triggered, such as "I Know That I Know Nothing". isTriggered is what
// the Legacies screen reads; the icon is its card icon, victory_<type>.
function bytLegacySources(player) {
  const sources = new Map();
  try {
    const legacies = player.Legacies;
    if (!legacies) return sources;
    const triggered = new Map();
    for (const row of GameInfo.LegacyModifiers) {
      let on = triggered.get(row.LegacyType);
      if (on === undefined) {
        try { on = legacies.isTriggered(row.LegacyType) === true; } catch (e) { on = false; }
        triggered.set(row.LegacyType, on);
      }
      if (!on) continue;
      const def = GameInfo.Legacies.lookup(row.LegacyType);
      const kind = def && def.LegacySubtype ? String(def.LegacySubtype).replace("LEGACY_", "").toLowerCase() : "";
      sources.set(row.ModifierId, {
        name: def && def.Name ? Locale.compose(def.Name) : row.LegacyType,
        icon: kind ? `url('blp:victory_${kind}')` : null,
        sid: `legacy:${row.LegacyType}`,
      });
    }
  } catch (e) { bytt(`legacy sources threw: ${e}`); }
  return sources;
}

// Story events you have completed, and their rewards. A reward is a modifier like any other
// (NarrativeStory_Rewards to NarrativeRewards.ModifierID), for example "+2 Science on
// Amphitheaters".
//
// UNOFFICIAL: getNumArchived, getArchived and getStoryStateName work, but no shipped UI script
// calls them, so a patch could change them. If they fail, stories go unnamed and bytStoriesRead
// stays false, so best guesses no longer rule stories out. The archive also holds discarded and
// failed stories; only "Complete" ones gave anything.
let bytStoriesRead = false;

function bytStorySources(player) {
  const sources = new Map();
  bytStoriesRead = false;
  try {
    const stories = player.Stories;
    if (!stories || typeof stories.getNumArchived !== "function") return sources;
    const rewardModifier = new Map();
    for (const row of GameInfo.NarrativeRewards) rewardModifier.set(row.NarrativeRewardType, row.ModifierID);
    const rewardsOf = new Map();
    for (const row of GameInfo.NarrativeStory_Rewards) {
      let list = rewardsOf.get(row.NarrativeStoryType);
      if (!list) { list = []; rewardsOf.set(row.NarrativeStoryType, list); }
      list.push(row.NarrativeRewardType);
    }
    let complete = 0;
    const count = stories.getNumArchived();
    for (let i = 0; i < count; i++) {
      const story = stories.getArchived(i);
      if (!story || stories.getStoryStateName(story.state) !== "Complete") continue;
      const def = GameInfo.NarrativeStories.lookup(story.type);
      if (!def) continue;
      complete++;
      const title = def.Name ? Locale.compose(def.Name).replace(/[.\s]+$/, "") : def.NarrativeStoryType;
      for (const reward of rewardsOf.get(def.NarrativeStoryType) || []) {
        const modifierId = rewardModifier.get(reward);
        // The narrative notification icon marks it as a story.
        if (modifierId) {
          // No "Story:" prefix: the icon says it, and the words made lines too long.
          sources.set(modifierId, { name: title, icon: "url('blp:ntf_choosenarrative')",
                                    sid: `story:${def.NarrativeStoryType}` });
        }
      }
    }
    bytStoriesRead = true;
    bytt(`stories completed: ${complete}`);
  } catch (e) { bytt(`story sources threw (unofficial API): ${e}`); }
  return sources;
}

// City-states you are suzerain of, and the bonus you chose from each. The city banners read the
// same things (city-banners.ts). A bonus reaches its yields in up to two hops:
// CityStateBonusModifiers names a modifier, which may attach others. Both hops are credited to the
// bonus.
let bytCityStatesRead = false;

function bytCityStateSources(player) {
  const sources = new Map();
  bytCityStatesRead = false;
  try {
    const me = GameContext.localPlayerID;
    const modifiersOf = new Map();
    for (const row of GameInfo.CityStateBonusModifiers) {
      let list = modifiersOf.get(row.CityStateBonusType);
      if (!list) { list = []; modifiersOf.set(row.CityStateBonusType, list); }
      list.push(row.ModifierID);
    }
    const attached = new Map();
    for (const row of GameInfo.ModifierArguments) {
      if (row.Name === "ModifierId") attached.set(row.ModifierId, bytSplit(row.Value));
    }
    let count = 0;
    for (const cs of Players.getAlive()) {
      if (!cs || !cs.isMinor || !cs.Influence || !cs.Influence.hasSuzerain) continue;
      if (cs.Influence.getSuzerain() !== me) continue;
      const hash = Game.CityStates.getBonusType(cs.id);
      const def = GameInfo.CityStateBonuses.find((t) => t.$hash == hash);
      if (!def) continue;
      count++;
      // The city banner's icon for the city-state's type.
      const kind = def.CityStateType ? String(def.CityStateType).toLowerCase() : "";
      const source = { name: def.Name ? Locale.compose(def.Name) : def.CityStateBonusType,
                       icon: kind ? `url('blp:bonustype_${kind}.png')` : null,
                       sid: `citystate:${def.CityStateBonusType}` };
      for (const id of modifiersOf.get(def.CityStateBonusType) || []) {
        sources.set(id, source);
        for (const sub of attached.get(id) || []) sources.set(sub, source);
      }
    }
    bytCityStatesRead = true;
    bytt(`city-state bonuses held: ${count}`);
  } catch (e) { bytt(`city-state sources threw: ${e}`); }
  return sources;
}

function bytBuildAbilityIndex() {
  const index = [];
  try {
    const player = Players.get(GameContext.localPlayerID);
    if (!player) return index;
    bytYieldModifiers(bytTraitSources(player), index);
    bytYieldModifiers(bytTraditionSources(player), index);
    bytYieldModifiers(bytNodeSources(player), index);
    bytYieldModifiers(bytStorySources(player), index);
    bytYieldModifiers(bytCityStateSources(player), index);
    bytYieldModifiers(bytLegacySources(player), index);
  } catch (e) { bytt(`ability index threw: ${e}`); }
  return index;
}

// Resources assigned to this settlement, and what they give it. A resource's effects belong to the
// resource rather than a tile: an assigned Crabs gives "+1 Food on warehouse buildings"
// (MOD_CRABS_WAREHOUSE_FOOD), linked only by a ResourceType argument. Per settlement, so kept
// apart from the player-wide index.
let bytResourceModifiers = null;   // ResourceType -> [ModifierId]

function bytResourceIndex(city) {
  const index = [];
  try {
    if (!bytResourceModifiers) {
      bytResourceModifiers = new Map();
      for (const row of GameInfo.ModifierArguments) {
        if (row.Name !== "ResourceType") continue;
        for (const type of bytSplit(row.Value)) {
          let list = bytResourceModifiers.get(type);
          if (!list) { list = []; bytResourceModifiers.set(type, list); }
          list.push(row.ModifierId);
        }
      }
    }
    const sources = new Map();
    for (const assigned of city.Resources.getAssignedResources() || []) {
      const hash = assigned && assigned.uniqueResource ? assigned.uniqueResource.resource : null;
      const def = hash !== null ? GameInfo.Resources.lookup(hash) : null;
      if (!def) continue;
      // Drawn as "[class][resource] Assigned +1[F]": the resource class icon the Civilopedia uses,
      // then the resource's own.
      const cls = def.ResourceClassType ? String(def.ResourceClassType).split("_")[1] : "";
      const icons = [cls ? `url('blp:restype_${cls.toLowerCase()}_v2')` : null,
                     bytIconCSS(def.ResourceType)].filter(Boolean);
      const source = { name: "Assigned", icon: icons[icons.length - 1] || null, icons,
                       sid: `resource:${def.ResourceType}` };
      for (const id of bytResourceModifiers.get(def.ResourceType) || []) sources.set(id, source);
    }
    // The town's focus (a town project such as Urban Center), read from Growth.projectType as the
    // production screen does.
    try {
      const projectType = city.Growth ? city.Growth.projectType : null;
      const project = projectType !== null && projectType !== undefined && projectType !== -1
        ? GameInfo.Projects.lookup(projectType) : null;
      if (project) {
        const source = { name: project.Name ? Locale.compose(project.Name) : project.ProjectType,
                         icon: bytIconCSS(project.ProjectType), sid: `project:${project.ProjectType}` };
        for (const row of GameInfo.ProjectModifiers) {
          if (row.ProjectType === project.ProjectType) sources.set(row.ModifierId, source);
        }
      }
    } catch (e) { bytt(`town focus threw: ${e}`); }
    bytYieldModifiers(sources, index);
  } catch (e) { bytt(`resource sources threw: ${e}`); }
  return index;
}

// Your bonuses that add this yield to TILES, player-wide and this settlement's own.
function bytPlotAbilities(yieldType, city) {
  try {
    bytAbilities("", yieldType, city);   // builds both indexes if need be
    const key = city ? `${city.id.owner}:${city.id.id}` : null;
    const local = key ? (bytCityIndex.get(key) || []) : [];
    return bytAbilityIndex.concat(local).filter((a) => a.plot && a.yieldType === yieldType);
  } catch (e) { return []; }
}

// Lead icons for a line naming several bonuses: each one's own, in the same order as the names.
// Repeats are dropped.
function bytIconsOf(list) {
  const out = [];
  for (const a of list) {
    for (const css of (a.icons && a.icons.length ? a.icons : [a.icon])) {
      if (css && out.indexOf(css) < 0) out.push(css);
    }
  }
  return out.length ? out : null;
}

function bytTargets(entry, constructibleType, tags) {
  return entry.types.indexOf(constructibleType) >= 0 || entry.tags.some((t) => tags.has(t));
}

// Rebuilt each time a panel is built (see bytBuildBody), so a policy swapped or a story finished
// mid-game shows the next time the tooltip opens.
function bytAbilities(constructibleType, yieldType, city) {
  try {
    if (!bytAbilityIndex) {
      bytAbilityIndex = bytBuildAbilityIndex();
      bytt(`bonuses indexed: ${bytAbilityIndex.length} that add a yield to a kind of building`);
    }
    let local = [];
    if (city) {
      const key = `${city.id.owner}:${city.id.id}`;
      local = bytCityIndex.get(key);
      if (!local) { local = bytResourceIndex(city); bytCityIndex.set(key, local); }
    }
    const tags = bytTagsByType.get(constructibleType) || new Set();
    return bytAbilityIndex.concat(local)
      .filter((a) => a.yieldType === yieldType && bytTargets(a, constructibleType, tags));
  } catch (e) { return []; }
}

// ---------------------------------------------------------------------------------------------
// Best guesses, for an amount none of your bonuses accounts for.
//
// A guess never changes a number. It only labels an amount that would otherwise read
// "Unattributed", and is marked as a guess.
//
// The guess is the kinds of thing that could pay this building this yield, from every modifier in
// the database of the form "+n <yield> to <this building or its tags>". Kinds already read in
// full are left out, since they would have been named. What is left is what cannot be read, such
// as a pantheon or a wonder: "Likely a pantheon or belief".
// ---------------------------------------------------------------------------------------------
const BYT_KIND_LABEL = {
  citystate: "a city-state bonus",
  belief: "a pantheon or belief",
  building: "a building or wonder",
  story: "a story event",
  policy: "a policy",
  civ: "a civ or leader ability",
  node: "a tech, civic or attribute",
  resource: "an assigned resource",
  legacy: "a legacy",
};
let bytGuessIndex = null;

function bytBuildGuessIndex() {
  const index = [];
  try {
    const kindOf = new Map();
    const mark = (id, kind) => { if (id && !kindOf.has(id)) kindOf.set(id, kind); };
    for (const r of GameInfo.NarrativeRewards) mark(r.ModifierID, "story");
    for (const r of GameInfo.TraditionModifiers) mark(r.ModifierId, "policy");
    for (const r of GameInfo.TraitModifiers) mark(r.ModifierId, "civ");
    for (const r of GameInfo.BeliefModifiers || []) mark(r.ModifierId, "belief");
    for (const r of GameInfo.ConstructibleModifiers || []) mark(r.ModifierId, "building");
    for (const r of GameInfo.ProgressionTreeNodeUnlocks) {
      if (r.TargetKind === "KIND_MODIFIER") mark(r.TargetType, "node");
    }
    for (const r of GameInfo.LegacyModifiers || []) mark(r.ModifierId, "legacy");
    for (const r of GameInfo.ModifierArguments) {
      if (r.Name === "ResourceType") mark(r.ModifierId, "resource");
    }
    const args = new Map();
    for (const row of GameInfo.ModifierArguments) {
      let bag = args.get(row.ModifierId);
      if (!bag) { bag = {}; args.set(row.ModifierId, bag); }
      bag[row.Name] = row.Value;
    }
    for (const [modifierId, bag] of args) {
      if (!bag.YieldType || bag.Amount === undefined || (!bag.Tag && !bag.ConstructibleType)) continue;
      const amount = Number(bag.Amount);
      if (!Number.isFinite(amount) || amount <= 0) continue;
      // City-state bonuses are attached by another modifier, so no table owns them; their ids
      // say what they are (ATTACH_MOD_CS_..., MOD_CS_...).
      const kind = kindOf.get(modifierId) || (/(^|_)CS_/.test(modifierId) ? "citystate" : null);
      if (!kind) continue;   // an owner we cannot name is not worth guessing at
      for (const yieldType of bytSplit(bag.YieldType)) {
        index.push({ tags: bytSplit(bag.Tag), types: bytSplit(bag.ConstructibleType), yieldType,
                     amount, kind });
      }
    }
    bytt(`guess index: ${index.length} modifiers that add a yield to a kind of building`);
  } catch (e) { bytt(`guess index threw: ${e}`); }
  return index;
}

function bytGuess(constructibleType, yieldType, gap) {
  try {
    if (!bytGuessIndex) bytGuessIndex = bytBuildGuessIndex();
    const tags = bytTagsByType.get(constructibleType) || new Set();
    // Kinds we read in full: if one of these were paying, it would already be named.
    const ruledOut = new Set(["policy", "civ", "node", "resource", "legacy"]);
    if (bytStoriesRead) ruledOut.add("story");
    if (bytCityStatesRead) ruledOut.add("citystate");
    const kinds = [];
    for (const m of bytGuessIndex) {
      if (m.yieldType !== yieldType || m.amount > gap + 0.05) continue;
      if (ruledOut.has(m.kind) || kinds.indexOf(m.kind) >= 0) continue;
      if (bytTargets(m, constructibleType, tags)) kinds.push(m.kind);
    }
    if (!kinds.length) return null;
    const words = kinds.slice(0, 3).map((k) => BYT_KIND_LABEL[k]);
    return `Likely ${words.length > 1 ? `${words.slice(0, -1).join(", ")} or ${words[words.length - 1]}` : words[0]}`;
  } catch (e) { return null; }
}

// Tile additions arrive as a name only ("God of Wisdom"), with no type to look up. To show what
// kind of thing it is, the name is matched against pantheon names, then your own sources, then
// every constructible (a wonder such as the Colosseum). Matching display text is safe here: both
// sides are composed from the same localised Name, and a miss only costs an icon.
let bytPantheonIcons = null;

// Returns { icon, icons, yours }. `yours` is true for your own bonuses.
let bytConstructibleIcons = null;

function bytTileSourceIcon(label) {
  const none = { icon: null, icons: null, yours: false };
  try {
    const key = String(label || "").trim().toLowerCase();
    if (!key) return none;
    if (!bytPantheonIcons) {
      bytPantheonIcons = new Map();
      for (const belief of GameInfo.Beliefs) {
        if (belief.BeliefClassType !== "BELIEF_CLASS_PANTHEON" || !belief.Name) continue;
        const icon = bytIconCSS(belief.BeliefType, "PANTHEONS");
        if (icon) bytPantheonIcons.set(Locale.compose(belief.Name).trim().toLowerCase(), icon);
      }
      bytt(`pantheons indexed: ${bytPantheonIcons.size}`);
    }
    const pantheon = bytPantheonIcons.get(key);
    // A pantheon on your tile is yours: nobody else's pantheon pays your plots.
    if (pantheon) return { icon: pantheon, icons: null, yours: true };
    if (!bytAbilityIndex) bytAbilities("", "");   // fills bytSourcesByName
    for (const [name, source] of bytSourcesByName) {
      if (name.trim().toLowerCase() === key) {
        return { icon: source.icon || null, icons: source.icons || null, yours: true };
      }
    }
    if (!bytConstructibleIcons) {
      bytConstructibleIcons = new Map();
      for (const def of GameInfo.Constructibles) {
        if (!def.Name) continue;
        const icon = bytIconCSS(def.ConstructibleType);
        if (icon) bytConstructibleIcons.set(Locale.compose(def.Name).trim().toLowerCase(), icon);
      }
    }
    const built = bytConstructibleIcons.get(key);
    return built ? { icon: built, icons: null, yours: false } : none;
  } catch (e) { return none; }
}

// The tile's appeal, read as the plot tooltip reads it (helpers.ts): GameplayMap.getAppeal against
// the global parameters APPEAL_FOR_HAPPINESS_TILE_YIELD (3) and
// APPEAL_FOR_DOUBLE_HAPPINESS_TILE_YIELD (5). The band names come from the game's own strings, so
// they localise.
function bytGlobalParam(name, fallback) {
  try {
    for (const row of GameInfo.GlobalParameters) {
      if (row.Name === name) {
        const n = Number(row.Value);
        return Number.isFinite(n) ? n : fallback;
      }
    }
  } catch (e) { /* fall through */ }
  return fallback;
}

function bytAppeal(loc) {
  try {
    if (GameplayMap.isWater(loc.x, loc.y)) return null;
    const appeal = GameplayMap.getAppeal(loc.x, loc.y);
    if (typeof appeal !== "number") return null;
    const charming = bytGlobalParam("APPEAL_FOR_HAPPINESS_TILE_YIELD", 3);
    const breathtaking = bytGlobalParam("APPEAL_FOR_DOUBLE_HAPPINESS_TILE_YIELD", 5);
    let band = "LOC_UI_AVERAGE_APPEAL_SHORT";
    let full = "LOC_UI_AVERAGE_APPEAL";
    let happiness = 0;
    if (appeal >= breathtaking) {
      band = "LOC_UI_BREATHTAKING_APPEAL_SHORT";
      full = "LOC_UI_BREATHTAKING_APPEAL";
      happiness = 2;   // the legend's own figures: Breathtaking is +2 Happiness per tile
    } else if (appeal >= charming) {
      band = "LOC_UI_CHARMING_APPEAL_SHORT";
      full = "LOC_UI_CHARMING_APPEAL";
      happiness = 1;   // Charming is +1
    }
    return {
      label: `${Locale.compose(band)} (${appeal})`,
      bonusLabel: Locale.compose(full),   // "Charming Appeal"
      value: appeal,
      happiness,
    };
  } catch (e) { bytt(`appeal read threw: ${e}`); return null; }
}

// ---------------------------------------------------------------------------------------------
// The yield tree, read per constructible.
//
// A parent's total is made of its children's, so each yield is counted once, at the lowest level
// that still says what it is. Counting every level double-counts.
//
// Three node shapes, told apart by `type` (GameValueStepTypes):
//   * ADDITION: `steps` whose values sum to the node's. Read the steps.
//   * ATTRIBUTE: `base` times (1 + `modifier`%). "Natural Yield 3" is Base 2 plus Resort Town's
//     +50%, so the modifier is worth 1 yield, not 50.
//   * MULTIPLY: `base` times `modifier`. "From Specialists 12" is 2 specialists at 6 each. The 2
//     is a head count, so the node is one line and is not split.
// Anything else (MAXIMUM, HALVE and the rest) is taken whole.
// ---------------------------------------------------------------------------------------------
const BYT_MAX_DEPTH = 14;

function bytStepType(name, fallback) {
  try {
    if (typeof GameValueStepTypes !== "undefined" && GameValueStepTypes[name] !== undefined) {
      return GameValueStepTypes[name];
    }
  } catch (e) { /* fall through */ }
  return fallback;
}
const BYT_ADDITION = bytStepType("ADDITION", 1);
const BYT_ATTRIBUTE = bytStepType("ATTRIBUTE", 4);
const BYT_MULTIPLY = bytStepType("MULTIPLY", 5);

function bytValue(v) {
  return typeof v === "number" && Number.isFinite(v) ? v : 0;
}

// Descriptions come as a LOC key or as composed text, either with icon markup. Compose, then strip
// the markup; the line has its own icon. An empty description stays empty and its value goes to
// the remainder, rather than being labelled "bonus" or "Other".
function bytText(raw) {
  try {
    return Locale.compose(raw || "").replace(/\[icon:[^\]]*\]\s*/g, "").trim();
  } catch (e) {
    return String(raw || "");
  }
}

// What a modifier is called: the names of its own steps ("Resort Town"), which say where it comes
// from, rather than its description, which is only ever "Bonus".
function bytModifierName(modifier) {
  const names = [];
  try {
    for (const step of modifier.steps || []) {
      const name = bytText(step.description);
      if (name) names.push(name);
    }
  } catch (e) { /* fall back to the description */ }
  return names.length ? names.join(", ") : bytText(modifier.description);
}

// The leaves under a node, each { raw, label, value }. `raw` is the description as given, used for
// bucketing; `label` is what the panel shows.
//
// An unnamed leaf takes the name of its nearest named parent: a tile's own yield is
// "Natural Yield: 2" over an unnamed node holding the 2, and reads "Natural Yield +2". The owning
// node (a building or plot) is skipped, since "Palace +5" says nothing; `isOwner` marks it.
function bytLeaves(node, depth, out, isOwner) {
  if (!node || depth > BYT_MAX_DEPTH) return;
  const start = out.length;
  try {
    bytLeavesOf(node, depth, out);
  } catch (e) { /* one bad node must not empty the tooltip */ }
  if (isOwner) return;
  const name = bytText(node.description);
  if (!name) return;
  for (let i = start; i < out.length; i++) {
    if (!out[i].label) { out[i].label = name; out[i].raw = node.description; }
  }
}

function bytLeavesOf(node, depth, out) {
  {
    const value = bytValue(node.value);
    if (node.base) {
      const baseValue = bytValue(node.base.value);
      if (node.type === BYT_MULTIPLY) {
        const each = node.modifier ? bytValue(node.modifier.value) : 0;
        // Specialists: head count times yield each. Flagged so the tile row can draw them as one
        // line across all yields.
        const specialists = /WORKERS/.test(String(node.base.description || ""));
        out.push({ raw: node.description, value, specialists,
                   label: `${bytText(node.description)} (${bytNum(baseValue)} × ${bytNum(each)})` });
        return;
      }
      bytLeaves(node.base, depth + 1, out);
      const extra = value - baseValue;
      if (node.modifier && Math.abs(extra) > 0.005) {
        let label = bytModifierName(node.modifier) || "Modifier";
        if (node.type === BYT_ATTRIBUTE) {
          const pct = bytValue(node.modifier.value);
          label += ` (${pct >= 0 ? "+" : ""}${bytNum(pct)}%)`;
        }
        out.push({ raw: label, label, value: extra });
      }
      return;
    }
    if (Array.isArray(node.steps) && node.steps.length &&
        (node.type === undefined || node.type === BYT_ADDITION)) {
      for (const step of node.steps) bytLeaves(step, depth + 1, out);
      return;
    }
    if (value) out.push({ raw: node.description, label: bytText(node.description), value });
  }
}

// Find the nodes that belong to a constructible or a plot, and read each one's leaves. Above those,
// the tree is unnamed containers, walked through and not counted.
function bytCollect(node, perBuilding, depth) {
  if (!node || depth > BYT_MAX_DEPTH) return;
  try {
    const ctx = node.context;
    if (ctx && ctx.id !== undefined) {
      let isPlot = false;
      try {
        isPlot = typeof ComponentIDTypes !== "undefined" && ctx.type === ComponentIDTypes.PLOT;
      } catch (e) { /* treat as a constructible */ }
      const key = isPlot ? `plot:${ctx.id}` : `con:${ctx.owner}:${ctx.id}:${ctx.type}`;
      let entry = perBuilding.get(key);
      if (!entry) {
        entry = { id: ctx, isPlot, total: 0, leaves: [] };
        perBuilding.set(key, entry);
      }
      // A node with no children is a bare total: the Palace's Food arrives as "Palace: 5". Its
      // description is the building's name rather than a source, so it gives no leaves and the
      // total goes to the remainder (see bytOwnYield).
      const leaves = [];
      if (node.base || (Array.isArray(node.steps) && node.steps.length)) {
        bytLeaves(node, depth, leaves, true);
      }
      // A tile can have several plot nodes, such as "Additions" and "From Specialists", so a plot's
      // parts add up; a constructible has one node per yield.
      if (isPlot) {
        entry.total += bytValue(node.value);
        entry.leaves.push(...leaves);
      } else {
        entry.total = bytValue(node.value);
        entry.leaves = leaves;
      }
      return;
    }
    if (node.base) {
      if (bytIsAddition(node.base) && Array.isArray(node.base.steps)) {
        for (const st of node.base.steps) bytCollect(st, perBuilding, depth + 1);
      } else {
        bytCollect(node.base, perBuilding, depth + 1);
      }
      if (node.modifier) bytCollect(node.modifier, perBuilding, depth + 1);
    } else if (Array.isArray(node.steps)) {
      for (const st of node.steps) bytCollect(st, perBuilding, depth + 1);
    }
  } catch (e) { /* one bad node must not empty the tooltip */ }
}

function bytIsAddition(node) {
  try {
    if (node.type !== undefined) return node.type === BYT_ADDITION;
  } catch (e) { /* fall through */ }
  return Array.isArray(node.steps) && node.steps.length > 0;
}

// Descriptions arrive both as raw LOC keys ("LOC_ATTR_BASE_COST") and as composed English
// ("From Great Works"), so match substrings that survive both forms. Anything that is none of
// these is a NAMED source and is shown under its own name.
function bytBucket(rawDescription) {
  const d = (rawDescription || "").toUpperCase();
  if (d.indexOf("GREAT WORK") >= 0 || d.indexOf("GREAT_WORK") >= 0) return "greatWorks";
  if (d.indexOf("ADJACEN") >= 0) return "adjacency";
  if (d.indexOf("BASE") >= 0) return "base";
  if (d.indexOf("WAREHOUSE") >= 0) return "warehouse";
  if (d.indexOf("PLAYER") >= 0) return "player";
  return "other";
}

// A building's own yield from the database (Constructible_YieldChanges, as the building details
// screen reads it).
//
// The tree does not always list it: a Library can come out exactly 3 Science short, which is its
// base Science. So where the remainder equals this figure exactly, it is named as the base yield.
// Anything else stays Unattributed.
let bytOwnYieldIndex = null;

function bytOwnYield(constructibleType, yieldType) {
  try {
    if (!bytOwnYieldIndex) {
      bytOwnYieldIndex = new Map();
      for (const row of GameInfo.Constructible_YieldChanges) {
        const key = `${row.ConstructibleType}|${row.YieldType}`;
        bytOwnYieldIndex.set(key, (bytOwnYieldIndex.get(key) || 0) + bytValue(Number(row.YieldChange)));
      }
      bytt(`base yields indexed: ${bytOwnYieldIndex.size}`);
    }
    return bytOwnYieldIndex.get(`${constructibleType}|${yieldType}`) || 0;
  } catch (e) { return 0; }
}

// Deliberately NOT the separate GREAT_WORKS node: Great Works already appear as a child inside
// the buildings tree, and walking both double-counts them.
function bytCityBreakdown(city, yieldIndex) {
  const perBuilding = new Map();
  try {
    const cy = city.Yields;
    if (!cy || typeof CityYieldNodes === "undefined") return perBuilding;
    for (const child of [CityYieldNodes.BUILDING_YIELDS, CityYieldNodes.IMPROVEMENT_YIELDS]) {
      const node = cy.getYieldsForNode(yieldIndex, [CityYieldNodes.INCOME, child], true);
      bytCollect(node, perBuilding, 0);
    }
  } catch (e) { bytt(`city breakdown threw: ${e}`); }
  return perBuilding;
}

// ---------------------------------------------------------------------------------------------
// Turning that into rows for one plot.
// ---------------------------------------------------------------------------------------------

// Capitalised to match the proper names they sit beside, such as "God of Wisdom".
const BYT_COMPONENT_LABEL = [
  // "Base Yield" rather than "Base": on a building row it is the building's own yield, and "Base"
  // alone reads as the tile's.
  ["base", "Base Yield"],
  ["adjacency", "Adjacency"],
  ["greatWorks", "Great Works"],
  ["warehouse", "Warehouse"],
  ["player", "Player Bonus"],
];

// Everything the tooltip needs about the hovered tile: one group per constructible (plus one for
// the tile itself), each with a line per yield it produces.
function bytPlotRows(loc) {
  const out = { city: null, groups: [] };
  try {
    // Only your own tiles: the tree is read from your City object.
    if (GameplayMap.getOwner(loc.x, loc.y) !== GameContext.localPlayerID) return out;
    const cityID = GameplayMap.getOwningCityFromXY(loc.x, loc.y);
    const city = cityID ? Cities.get(cityID) : null;
    if (!city) return out;
    out.city = city;

    const plotIndex = GameplayMap.getIndexFromLocation(loc);
    const cc = city.Constructibles;
    // key -> { name, order, yields: [{ code, name, total, parts, gap }] }
    const groups = new Map();

    for (let yi = 0; yi < GameInfo.Yields.length; yi++) {
      const ydef = GameInfo.Yields[yi];
      if (!ydef) continue;
      const entries = bytCityBreakdown(city, yi);

      for (const [key, entry] of entries) {
        try {
          if (!entry.total) continue;

          let name = null;
          let order = 0;
          let icon = null;
          if (entry.isPlot) {
            if (entry.id.id !== plotIndex) continue;
            // The tile's own yields come first, as "Base Tile": the tile before anything was built
            // on it.
            name = "Base Tile";
            order = 0;
          } else {
            const inst = Constructibles.getByComponentID(entry.id);
            if (!inst || !inst.location) continue;
            if (inst.location.x !== loc.x || inst.location.y !== loc.y) continue;
            const def = GameInfo.Constructibles.lookup(inst.type);
            if (!def) continue;
            name = Locale.compose(def.Name);
            order = 10;
            // The same icon the plot tooltip puts beside the building's name.
            try { icon = UI.getIconCSS(def.ConstructibleType, "BUILDING"); } catch (e) { icon = null; }
          }

          // Known components summed into their buckets; everything else keeps its own name.
          const sums = { base: 0, adjacency: 0, greatWorks: 0, warehouse: 0, player: 0 };
          const named = [];
          for (const leaf of entry.leaves) {
            if (!leaf.label) continue;   // unnamed: left to the remainder
            const bucket = entry.isPlot ? "other" : bytBucket(leaf.raw);
            if (bucket === "other") named.push(leaf);
            else sums[bucket] += leaf.value;
          }

          // Great Works have a direct accessor. Use it instead of the tree's figure, never as well,
          // or they are counted twice.
          try {
            if (!entry.isPlot && cc && cc.getBuildingYieldFromGreatWorks) {
              const direct = cc.getBuildingYieldFromGreatWorks(ydef.YieldType, entry.id);
              if (typeof direct === "number") sums.greatWorks = direct;
            }
          } catch (e) { /* keep the tree's figure */ }

          const parts = [];
          const tileAbilities = [];
          let accounted = 0;
          for (const [field, label] of BYT_COMPONENT_LABEL) {
            const v = sums[field];
            if (!v) continue;
            accounted += v;
            // The kind goes with the part; the panel uses it to choose how each line is written.
            parts.push({ amount: v, term: label, kind: field });
          }
          // Named sources, written as additions: "God of Wisdom +1", "Resort Town (+50%) +1".
          // Specialists stay in the sum but are drawn on a line of their own (see below).
          for (const leaf of named) {
            accounted += leaf.value;
            if (leaf.specialists) {
              parts.push({ label: "Specialists", value: leaf.value, kind: "specialists" });
              continue;
            }
            const found = entry.isPlot ? bytTileSourceIcon(leaf.label) : null;
            parts.push({ label: leaf.label, value: leaf.value, kind: "bonus",
                         sourceIcon: found ? found.icon : null, sourceIcons: found ? found.icons : null });
            // Your own bonuses named by the engine on the tile.
            if (found && found.yours) {
              tileAbilities.push({ name: leaf.label, amount: leaf.value, icon: found.icon, icons: found.icons });
            }
          }

          let group = groups.get(key);
          if (!group) {
            group = { name, order, icon, isPlot: entry.isPlot, id: entry.id, yields: [] };
            groups.set(key, group);
          }
          let yIcon = null;
          try { yIcon = UI.getIconCSS(ydef.YieldType, "YIELD"); } catch (e) { yIcon = null; }
          // Where the arithmetic leaves a remainder, try to name it from your bonuses. A bonus is
          // named only when yield, tag and amount all agree.
          let abilities = [];
          let gap = Math.abs(accounted - entry.total) > 0.05 ? entry.total - accounted : 0;
          if (!entry.isPlot) {
            const def = Constructibles.getByComponentID(entry.id);
            const typeDef = def ? GameInfo.Constructibles.lookup(def.type) : null;
            if (typeDef) {
              // The building's own yield first: it is what a building makes before anything
              // else is added, and the tree leaves it out (see bytOwnYield).
              if (gap) {
                const own = bytOwnYield(typeDef.ConstructibleType, ydef.YieldType);
                if (own && Math.abs(own - gap) < 0.05) {
                  const base = parts.find((p) => p.kind === "base");
                  if (base) base.amount += gap;
                  else parts.unshift({ amount: gap, term: "Base Yield", kind: "base" });
                  gap = 0;
                }
              }
              abilities = bytAbilities(typeDef.ConstructibleType, ydef.YieldType, city);
              // A bonus can account for one amount in a yield, not two. Without this, one bonus
              // could match both the Player Bonus and the remainder. Once used, it is spent.
              const spent = new Set();
              const exactly = (amount) => {
                const hits = abilities.filter((a) => !spent.has(a) && Math.abs(a.amount - amount) < 0.05);
                if (hits.length !== 1) return null;
                spent.add(hits[0]);
                return hits[0];
              };
              // The engine's "Player Bonus" is where civ, leader, policy and attribute bonuses
              // land, unnamed. Where exactly one of yours fits this yield and building in exactly
              // that amount, name it: Dhamma Thambha gives +2 Happiness to SCIENCE buildings.
              const ability = sums.player ? exactly(sums.player) : null;
              if (ability) {
                for (let i = 0; i < parts.length; i++) {
                  if (parts[i].kind !== "player") continue;
                  parts[i] = { label: ability.name, value: sums.player, kind: "bonus",
                               sourceIcon: ability.icon || null, sourceIcons: ability.icons || null };
                  break;
                }
              }
              // Several of yours could each be the whole Player Bonus (Literature and Philosopher's
              // Circle both give a Library +2 Science). Say so on the line, as a guess. None is
              // spent: they are alternatives.
              if (!ability && sums.player) {
                const seen = new Set();
                const mine = abilities.filter((a) => {
                  if (spent.has(a) || seen.has(a.sid)) return false;
                  seen.add(a.sid);
                  return true;
                });
                // Or all of them together: a Monument's Player Bonus of 4 is Drama and Poetry 2
                // plus Cursus Honorum 2. Every one of yours that fits, adding up exactly.
                const total = mine.reduce((t, a) => t + a.amount, 0);
                const at = parts.findIndex((q) => q.kind === "player");
                if (mine.length > 1 && at >= 0 && Math.abs(total - sums.player) < 0.05) {
                  parts.splice(at, 1, ...mine.map((a) => ({
                    label: a.name, value: a.amount, kind: "bonus",
                    sourceIcon: a.icon || null, sourceIcons: a.icons || null,
                  })));
                  for (const a of mine) spent.add(a);
                }
                const rivals = mine.filter((a) => !spent.has(a) && Math.abs(a.amount - sums.player) < 0.05);
                if (rivals.length > 1) {
                  for (let i = 0; i < parts.length; i++) {
                    if (parts[i].kind !== "player") continue;
                    parts[i] = { label: `Likely: ${rivals.map((a) => a.name).join(" or ")}`,
                                 value: sums.player, kind: "guess", sourceIcons: bytIconsOf(rivals),
                                 candidates: rivals.map((a) => ({ name: a.name, icons: bytIconsOf([a]) })) };
                    break;
                  }
                }
              }
              // The same test against an unexplained remainder.
              if (gap) {
                const exact = exactly(gap);
                if (exact) {
                  parts.push({ label: exact.name, value: gap, kind: "bonus",
                               sourceIcon: exact.icon || null, sourceIcons: exact.icons || null });
                  gap = 0;
                }
              }
              // Or several of them, if every one left over (one per name: the same policy can
              // come in variants, of which one applies) adds up to exactly the remainder.
              if (gap) {
                const byName = new Map();
                for (const a of abilities) if (!spent.has(a) && !byName.has(a.sid)) byName.set(a.sid, a);
                const rest = [...byName.values()];
                const sum = rest.reduce((t, a) => t + a.amount, 0);
                if (rest.length > 1 && Math.abs(sum - gap) < 0.05) {
                  for (const a of rest) {
                    parts.push({ label: a.name, value: a.amount, kind: "bonus", sourceIcon: a.icon || null,
                                 sourceIcons: a.icons || null });
                    spent.add(a);
                  }
                  gap = 0;
                }
              }
              // The building's own yield plus your bonuses: a Granary making 2 Food where others
              // make 1 is its base 1 plus an assigned Crabs. Neither alone equals the remainder.
              if (gap > 0) {
                const own = bytOwnYield(typeDef.ConstructibleType, ydef.YieldType);
                const byName = new Map();
                for (const a of abilities) if (!spent.has(a) && !byName.has(a.sid)) byName.set(a.sid, a);
                const rest = [...byName.values()];
                const one = own > 0 ? rest.filter((a) => Math.abs(own + a.amount - gap) < 0.05) : [];
                const all = own > 0 && rest.length &&
                  Math.abs(own + rest.reduce((t, a) => t + a.amount, 0) - gap) < 0.05;
                const use = one.length === 1 ? one : (all ? rest : null);
                if (use) {
                  const base = parts.find((q) => q.kind === "base");
                  if (base) base.amount += own;
                  else parts.unshift({ amount: own, term: "Base Yield", kind: "base" });
                  for (const a of use) {
                    parts.push({ label: a.name, value: a.amount, kind: "bonus", sourceIcon: a.icon || null,
                                 sourceIcons: a.icons || null });
                    spent.add(a);
                  }
                  gap = 0;
                }
              }
              // Some of yours fit but do not add up to it exactly (a bonus can have conditions we
              // do not evaluate): offer them as likely, each for its own amount, while they fit.
              if (gap > 0) {
                for (const a of abilities) {
                  if (spent.has(a) || a.amount <= 0 || a.amount > gap + 0.05) continue;
                  if (parts.some((q) => q.label === `Likely: ${a.name}`)) continue;
                  parts.push({ label: `Likely: ${a.name}`, value: a.amount, kind: "guess",
                               sourceIcon: a.icon || null, sourceIcons: a.icons || null,
                               candidates: [{ name: a.name, icons: bytIconsOf([a]) }] });
                  spent.add(a);
                  gap = Math.abs(gap - a.amount) < 0.05 ? 0 : gap - a.amount;
                }
              }
              // Nothing of yours: a best guess at what kind of thing it is, marked as one. The
              // amount is still the engine's; only the label is a guess.
              if (gap > 0) {
                const guess = bytGuess(typeDef.ConstructibleType, ydef.YieldType, gap);
                if (guess) {
                  parts.push({ label: guess, value: gap, kind: "guess" });
                  gap = 0;
                }
              }
            }
          } else if (gap > 0) {
            // A tile's unnamed steps: the same tests against your bonuses that add yield to TILES.
            // Their requirements (the capital only, urban tiles only) are not evaluated, so as
            // with buildings a name is given only where the amounts agree exactly. Happiness that
            // Appeal would explain is left for the appeal test below, which is surer.
            const appealHere = ydef.YieldType === "YIELD_HAPPINESS" ? bytAppeal(loc) : null;
            if (!(appealHere && appealHere.happiness && Math.abs(gap - appealHere.happiness) < 0.05)) {
              const named = new Set(parts.map((q) => q.label));
              const byId = new Map();
              for (const a of bytPlotAbilities(ydef.YieldType, city)) {
                // A tile modifier WITH a Tooltip argument is named by the engine itself ("Twelve
                // Tables +1"), so it cannot be what an unnamed step is.
                if (a.tooltip || named.has(a.name) || byId.has(a.sid)) continue;
                byId.set(a.sid, a);
              }
              const pool = [...byId.values()];
              const exact = pool.filter((a) => Math.abs(a.amount - gap) < 0.05);
              const sum = pool.reduce((t, a) => t + a.amount, 0);
              const use = exact.length === 1 ? exact
                : (pool.length > 1 && Math.abs(sum - gap) < 0.05 ? pool : null);
              if (use) {
                for (const a of use) {
                  parts.push({ label: a.name, value: a.amount, kind: "bonus", sourceIcon: a.icon || null,
                               sourceIcons: a.icons || null });
                  tileAbilities.push(a);
                }
                gap = 0;
              } else if (exact.length > 1) {
                // Several of yours could be it: say so, without picking one.
                parts.push({ label: `Likely: ${exact.map((a) => a.name).join(" or ")}`, value: gap,
                             kind: "guess", sourceIcons: bytIconsOf(exact),
                             candidates: exact.map((a) => ({ name: a.name, icons: bytIconsOf([a]) })) });
                gap = 0;
              }
            }
          }

          if (entry.isPlot) abilities = tileAbilities;

          group.yields.push({
            type: ydef.YieldType,
            icon: yIcon,
            // Your bonuses that bear on this building and yield, each with the yield's icon.
            // Written to fixtures; the panel does not draw them.
            abilities: abilities.map((a) => ({
              name: a.name, amount: a.amount, icon: yIcon, sourceIcon: a.icon || null,
              sourceIcons: a.icons || null,
            })),
            // Locale.compose of the name gives "[icon:YIELD_SCIENCE] Science"; strip the markup.
            name: Locale.compose(ydef.Name).replace(/\[icon:[^\]]*\]\s*/g, ""),
            total: entry.total,
            parts,
            // The engine can state a total its children do not add up to (15 against 12), so the
            // stated total wins and the difference shows as Unattributed.
            gap,
          });
        } catch (e) { /* skip this entry */ }
      }
    }

    out.cc = cc;
    out.groups = [...groups.values()].sort((a, b) => (a.order - b.order) || a.name.localeCompare(b.name));
    // Appeal, named only where the arithmetic finds it. If the tile's Happiness has a remainder
    // equal to what the appeal band is worth, the remainder is the appeal. Otherwise nothing is
    // said: on some tiles the engine accounts for all the Happiness without it, and adding it would
    // make the parts exceed the total.
    try {
      const appeal = bytAppeal(loc);
      if (appeal && appeal.happiness) for (const group of out.groups) {
        if (!group.isPlot) continue;
        for (const y of group.yields) {
          if (y.type !== "YIELD_HAPPINESS") continue;
          if (Math.abs(y.gap - appeal.happiness) < 0.05) {
            y.parts.push({ label: appeal.bonusLabel, value: appeal.happiness, kind: "bonus" });
            y.gap = 0;
          }
        }
      }
    } catch (e) { bytt(`appeal read threw: ${e}`); }

    // Needs the engine, so it is done here rather than in the panel module.
    for (const group of out.groups) {
      if (!group.isPlot) group.slots = bytGreatWorkSlots(city, group.id);
      else group.specialists = bytSpecialists(city, plotIndex, group);
    }
  } catch (e) { bytt(`plot rows threw: ${e}`); }
  return out;
}

// ---------------------------------------------------------------------------------------------
// The body. The layout lives in byt-yield-panel.js; this part needs the engine: which tile, which
// numbers, which Great Works.
// ---------------------------------------------------------------------------------------------
// A building's Great Work slots, one entry per slot, filled or empty. A filled one carries the
// work's image: GreatWorks.Image is a path like "fs://game/gw_books.png", which
// screen-great-works.ts puts in an <img>. Icons per work are not registered.
function bytGreatWorkSlots(city, componentID) {
  const slots = [];
  try {
    const buildings = city.Constructibles.getGreatWorkBuildings();
    if (!buildings) return slots;
    for (const building of buildings) {
      const id = building.constructibleID;
      if (!id || id.id !== componentID.id || id.owner !== componentID.owner) continue;
      for (const slot of building.slots || []) {
        try {
          const gwType = Game.Culture.getGreatWorkType(slot.greatWorkIndex);
          const gw = gwType ? GameInfo.GreatWorks.lookup(gwType) : null;
          if (gw) {
            slots.push({
              name: Locale.compose(gw.Name),
              image: gw.Image ? `url("${gw.Image}")` : null,
            });
          } else {
            slots.push({ empty: true });
          }
        } catch (e) { slots.push({ empty: true }); }
      }
    }
  } catch (e) { bytt(`great works lookup threw: ${e}`); }
  return slots;
}

// The tile's specialists as one line across every yield they pay: "[sp] Specialists 1/2 +3[G]
// +2[H]". The count and the icon are the game's own, as the plot tooltip shows them (helpers.ts,
// Workers.GetTilePlacementInfo). The amounts still count in each yield's sum; only where they are
// drawn changes.
function bytSpecialists(city, plotIndex, group) {
  try {
    const yields = [];
    for (const y of group.yields) {
      const paid = y.parts.filter((q) => q.kind === "specialists").reduce((t, q) => t + q.value, 0);
      if (paid) yields.push({ type: y.type, icon: y.icon, value: paid });
    }
    if (!yields.length) return null;
    let count = null;
    let max = null;
    try {
      const info = city.Workers.GetTilePlacementInfo(plotIndex);
      count = info.NumWorkers;
      max = info.MaxWorkers;
    } catch (e) { /* the line still says what they pay */ }
    return { icon: "url('blp:agecard_crisis_specialists')", count, max, yields };
  } catch (e) { bytt(`specialists threw: ${e}`); return null; }
}

// ---------------------------------------------------------------------------------------------
// Fixture dump, for development. With it on, every panel the tooltip builds is written to UI.log,
// so the mock page can draw real tiles.
//
// The panel is drawn from a plain object with no engine in it, so that object is the fixture.
// UI.log cuts long lines, so a record longer than BYT_CHUNK characters is written as numbered
// fragments to be joined again. There is no sequence number: other records in the log would
// interleave with ours and look like gaps.
//
// The record format and its `[C7LAB]` tag come from a development tool we use that has not been
// released publicly yet. It turns these records into tools/mock/fixtures.js.
//
// Icons are kept as they are, `url('blp:...')` included. The mock cannot load them but reads the
// name and draws a coloured disc instead.
//
// Off for release: players do not need a log record per tooltip. It is a top-level constant, so a
// change needs a restart.
const BYT_DUMP_FIXTURES = false;
const BYT_CHUNK = 400;
const BYT_RUN = `byt${Date.now().toString(36)}`;
let bytRecordCount = 0;

function bytRecord(kind, data) {
  try {
    const record = { v: 1, kind, run: BYT_RUN, data };
    try { record.turn = Game.turn; } catch (e) { /* no game in progress; still a valid record */ }
    const text = JSON.stringify(record);
    if (text.length <= BYT_CHUNK) {
      console.error(`[C7LAB] ${text}`);
      return;
    }
    const id = `${BYT_RUN}-${++bytRecordCount}`;
    const total = Math.ceil(text.length / BYT_CHUNK);
    for (let i = 0; i < total; i++) {
      const part = text.substr(i * BYT_CHUNK, BYT_CHUNK);
      console.error(`[C7LAB#] ${JSON.stringify({ id, i, n: total, len: part.length, s: part })}`);
    }
  } catch (e) { bytt(`record ${kind} would not print: ${e}`); }
}

function bytExportFixture(view, loc) {
  if (!BYT_DUMP_FIXTURES) return;
  try {
    const groups = (view.groups || []).map((group) => ({
      name: group.name,
      isPlot: !!group.isPlot,
      icon: group.icon || null,
      specialists: group.specialists || null,
      slots: (group.slots || []).map((slot) => ({
        name: slot.name || null, image: slot.image || null, empty: !!slot.empty,
      })),
      yields: (group.yields || []).map((y) => ({
        type: y.type, name: y.name, icon: y.icon || null, total: y.total, gap: y.gap,
        parts: (y.parts || []).map((part) => ({
          label: part.label, value: part.value, amount: part.amount, term: part.term,
          kind: part.kind, sourceIcon: part.sourceIcon || null, sourceIcons: part.sourceIcons || null,
          candidates: part.candidates || null,
        })),
        abilities: (y.abilities || []).map((a) => ({
          name: a.name, amount: a.amount, icon: a.icon || null, sourceIcon: a.sourceIcon || null,
          sourceIcons: a.sourceIcons || null,
        })),
      })),
    }));
    const fixture = {
      label: `${view.cityName} (${loc.x},${loc.y})`,
      cityName: view.cityName,
      loc: { x: loc.x, y: loc.y },
      emptyMessage: view.emptyMessage,
      groups,
    };
    bytRecord("byt-fixture", fixture);
  } catch (e) { bytt(`fixture dump threw: ${e}`); }
}

// What the panel draws for one tile, or null where the tile is not in one of your settlements.
// Strings are localised and icons resolved here, so the renderer needs nothing from the engine.
function bytView(loc) {
  const data = bytPlotRows(loc);
  if (!data.city) return null;
  return {
    cityName: Locale.compose(data.city.name),
    loc,
    groups: data.groups,
    emptyMessage: "Nothing on this tile is producing a yield the city accounts for.",
  };
}

function bytBuildBody(parentCtx) {
  try {
    const loc = bytTooltipPlot(parentCtx);
    if (!loc) return [bytMessage("Could not tell which tile this tooltip is for.")];

    bytAbilityIndex = null;   // re-read your bonuses: a policy may have changed since last time
    bytCityIndex = new Map();
    bytSourcesByName = new Map();
    const view = bytView(loc);
    if (!view) {
      return [bytMessage("This tile belongs to no settlement of yours, so the engine gives no breakdown for it.")];
    }
    bytExportFixture(view, loc);
    return bytPanel(view);
  } catch (e) {
    bytt(`body build threw: ${e}`);
    return [bytMessage("Breakdown unavailable, see UI.log.")];
  }
}

// ---------------------------------------------------------------------------------------------
// Export every tile you own, without opening each breakdown. A fixture is only written when a
// panel is built, so this builds one for every tile of every settlement. Trigger it from the UI
// console:
//
//     window.dispatchEvent(new CustomEvent('byt-export-all'))
//
// One settlement per frame, since each tile reads the city's yield tree once per yield and a
// whole empire at once would stall the UI. It needs BYT_DUMP_FIXTURES on, and logs a count when
// done.
function bytExportAll() {
  try {
    if (!BYT_DUMP_FIXTURES) { bytt("export-all: BYT_DUMP_FIXTURES is off, nothing written"); return; }
    const player = Players.get(GameContext.localPlayerID);
    const cityIDs = player && player.Cities ? [...player.Cities.getCityIds()] : [];
    let tiles = 0;
    let written = 0;
    const next = (i) => {
      if (i >= cityIDs.length) {
        bytt(`export-all: ${written} fixture(s) from ${tiles} tile(s) in ${cityIDs.length} settlement(s)`);
        return;
      }
      try {
        const city = Cities.get(cityIDs[i]);
        for (const plotIndex of (city && city.getPurchasedPlots()) || []) {
          tiles++;
          try {
            const plot = GameplayMap.getLocationFromIndex(plotIndex);
            const loc = { x: plot.x, y: plot.y };
            const view = bytView(loc);
            // A tile nothing is built on and nothing is added to has no rows: no fixture.
            if (!view || !view.groups.length) continue;
            bytExportFixture(view, loc);
            written++;
          } catch (e) { bytt(`export-all: tile ${plotIndex} threw: ${e}`); }
        }
      } catch (e) { bytt(`export-all: settlement ${i} threw: ${e}`); }
      setTimeout(() => next(i + 1), 0);
    };
    bytAbilityIndex = null;
    bytCityIndex = new Map();
    bytSourcesByName = new Map();
    bytt(`export-all: starting, ${cityIDs.length} settlement(s)`);
    next(0);
  } catch (e) { bytt(`export-all threw: ${e}`); }
}

try {
  window.addEventListener("byt-export-all", () => bytExportAll());
} catch (e) { bytt(`could not listen for byt-export-all: ${e}`); }

// ---------------------------------------------------------------------------------------------
// The override itself.
// ---------------------------------------------------------------------------------------------
let bytOriginal = null;

const BYTYieldBarWithBreakdown = (props) => {
  try {
    const bar = createComponent(bytOriginal, props);
    // Outside a tooltip (were YieldBar ever reused elsewhere) there is no parent to nest under,
    // and a bare Tooltip there would be a new top-level one. Hand back the plain bar instead.
    const parentCtx = useContext(TooltipContext);
    if (!parentCtx) return bar;

    return createComponent(Tooltip, {
      initialVPosition: TooltipVerticalPosition.CENTER,
      initialHPosition: TooltipHorizontalPosition.RIGHT,
      allowFlip: true,
      get children() {
        return [
          createComponent(Tooltip.Trigger, {
            get children() {
              // The bar with a small "i" beside it, showing that these numbers open a breakdown.
              // The badge is inside the trigger, so hovering it counts.
              const wrap = document.createElement("div");
              wrap.className = "flex flex-row items-center justify-center";
              // The bar fills its row, which left the badge at the far right. Let the bar size to
              // its contents so the badge sits beside the last pill.
              try {
                if (bar && bar.style) {
                  bar.style.flexGrow = "0";
                  bar.style.flexShrink = "0";
                  bar.style.width = "auto";
                }
              } catch (e) { /* a badge a little too far right is not worth losing the panel */ }
              wrap.appendChild(bar);
              wrap.appendChild(bytInfoBadge());
              return wrap;
            },
          }),
          createComponent(Tooltip.Content, {
            get children() {
              return createComponent(Tooltip.Frame, {
                "class": "max-w-128",
                // Built inside the getter, so it is computed when the tooltip opens and always
                // shows the tooltip's current tile.
                //
                // Untracked on purpose. Reading the parent's plot goes through
                // TooltipModel.getTarget, which reads the model's `targets` signal. A tracked read
                // subscribes this body to it, and the model writes that signal whenever any tooltip
                // is triggered, so the panel would be rebuilt from under itself.
                get children() { return untrack(() => bytBuildBody(parentCtx)); },
              });
            },
          }),
        ];
      },
    });
  } catch (e) {
    bytt(`override threw, falling back to the plain bar: ${e}`);
    try { return createComponent(bytOriginal, props); } catch (e2) { return null; }
  }
};

let bytInstalled = false;

function bytInstall() {
  try {
    if (bytInstalled) return true;
    const wrapped = ComponentRegistry.get("YieldBar");
    if (!wrapped || typeof wrapped.factory !== "function") return false;
    const original = wrapped.factory();
    if (!original || original === BYTYieldBarWithBreakdown) return false;
    // Take the real component before registering. Calling the registry's wrapper from inside the
    // override would recurse forever, since by then the wrapper resolves to this override.
    bytOriginal = original;
    ComponentRegistry.register("YieldBar", BYTYieldBarWithBreakdown, 1);
    bytInstalled = true;
    bytt("installed on YieldBar: hover a tile, press K, then hover the yield icons");
    return true;
  } catch (e) {
    bytt(`install threw: ${e}`);
    return false;
  }
}

console.error(`[BYT] yield breakdown tooltip loaded [${BYT_BUILD}] [${BYT_PANEL_BUILD}]`);

// YieldBar may not be registered yet: UIScripts load early, and it registers when base-standard's
// ui-next module is first imported. Import it to hurry that along, then poll. A failed import must
// not stop this file.
try {
  import("../../base-standard/ui-next/components/yield-bar.js")
    .then(() => bytInstall())
    .catch((e) => bytt(`could not import yield-bar.js directly (${e}) — waiting for it instead`));
} catch (e) {
  bytt(`dynamic import threw: ${e}`);
}

if (!bytInstall()) {
  let tries = 0;
  const handle = setInterval(() => {
    // A minute of waiting, which is well past the point where the map and its tooltips are up.
    if (bytInstall() || ++tries > 120) {
      clearInterval(handle);
      if (!bytInstalled) bytt("gave up waiting for YieldBar to register, no breakdown tooltip this game");
    }
  }, 500);
}
