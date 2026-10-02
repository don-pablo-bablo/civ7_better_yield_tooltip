// Rendering for the yield breakdown. No engine calls and no imports, so the same code draws the
// tooltip in game and the mock page in tools/mock/yield-panel.html. Anything that needs the engine
// belongs in byt-yield-tooltip.js.
//
// Input is one object. Strings are already localised and icons are already CSS url(...) values:
//
//   {
//     cityName: "Pataliputra",
//     loc: { x: 20, y: 7 },
//     groups: [
//       {
//         name: "Base Tile",  isPlot: true,  icon: "url(...)" | null,
//         yields: [ { icon: "url(...)", name: "Science", type: "YIELD_SCIENCE", total: 3,
//                     parts: [ { amount: 3, term: "Base Yield", kind: "base" },
//                              { label: "God of Wisdom", value: 1, kind: "bonus" } ],
//                     gap: 0,
//                     abilities: [ { name: "Dhamma Thambha", amount: 2, icon: "url(...)" } ] } ],
//         slots: [ { name: "Codex", image: "url(...)" }, { empty: true } ]   // buildings only
//       },
//     ]
//   }
//
// The classes are the game's own, taken from the components the plot tooltip uses, so the panel
// matches it:
//   * rows follow TicketRow: icon cell, rule, content (plot-tooltip/components/utility.tsx);
//   * yield pills follow the compact YieldBar entry: icon and number, no name (yield-bar.tsx,
//     pills.tsx);
//   * the divider between groups is EntryDivider (utility.tsx).
//
// No `foo-0\.5` classes. The game's files write them with a literal backslash, which the game's CSS
// engine accepts and a browser does not. Half-unit spacing is set inline instead.

// Build stamp. Bump it on every edit. The tooltip logs it at load beside its own, since this module
// also runs in a browser and logs nothing itself.
export const BYT_PANEL_BUILD = "panel-12 2 Oct";

// 15 rather than 15.0, but 2.5 kept.
export function bytNum(v) {
  const r = Math.round(v * 10) / 10;
  return Number.isInteger(r) ? String(r) : r.toFixed(1);
}

export function bytDiv(cls, text) {
  const el = document.createElement("div");
  if (cls) el.className = cls;
  if (text !== undefined) el.textContent = text;
  return el;
}

function icon(cls, css, extraStyle) {
  const el = bytDiv(cls);
  try {
    if (css) el.style.backgroundImage = css;
    el.style.backgroundSize = "contain";
    el.style.backgroundPosition = "center";
    el.style.backgroundRepeat = "no-repeat";
    if (extraStyle) Object.assign(el.style, extraStyle);
  } catch (e) { /* an icon-less row is still a row */ }
  return el;
}

// The compact yield pill: icon, number, nothing else.
function pill(yieldEntry) {
  const el = bytDiv("flex items-center rounded-full leading-normal text-sm min-h-6");
  el.style.border = "1px solid #53565D";
  el.style.backgroundColor = "#23252b";
  el.style.paddingLeft = "0.333rem";
  el.style.paddingRight = "0.444rem";
  el.appendChild(icon("size-6 shrink-0", yieldEntry.icon, { marginLeft: "-0.111rem" }));
  const value = bytDiv("text-sm", bytNum(yieldEntry.total));
  value.style.letterSpacing = "-0.5px";
  el.appendChild(value);
  return el;
}

// The parts of one yield. Where the engine's total is more than its parts add up to, the difference
// is added as "Unattributed" rather than hidden.
export function bytParts(yieldEntry) {
  const parts = (yieldEntry.parts || []).slice();
  // A breakdown that is only "Unattributed" says nothing the pill does not, so draw nothing.
  if (!parts.length) return [];
  if (yieldEntry.gap) parts.push({ amount: yieldEntry.gap, term: "Unattributed", kind: "gap" });
  // A lone "Base Yield" is still drawn. Hidden, it left amounts in the totals with no line under
  // them: a Great Wall's own +2 Culture looked unsupported.
  return parts;
}

// A small "i" marking yields that open a breakdown. The game has no info sprite, so it is drawn as
// a bordered circle at the size of the other inline icons.
export function bytInfoBadge() {
  const el = bytDiv("flex items-center justify-center rounded-full text-xs font-body", "i");
  el.style.width = "1rem";
  el.style.height = "1rem";
  el.style.marginLeft = "0.333rem";
  el.style.border = "1px solid #8d97a6";
  el.style.color = "#c7ccd4";
  el.style.lineHeight = "1";
  return el;
}

// A part is written one of two ways.
//
// A bonus reads name first, then amount and yield: "Adjacency +3[S]", "Literature +2[S]".
//
// Base Yield and Unattributed are not bonuses, so they read value first with no plus sign:
// "3[S] Base Yield", "4[S] Unattributed".
//
// The number and the words are kept apart in the data because the yield icon goes between them.
// `text` is an older flat form, still read in case an old fixture uses it.
const BYT_VALUE_FIRST = new Set(["base", "gap"]);

function bytValueFirst(part) {
  return part && part.term !== undefined && BYT_VALUE_FIRST.has(part.kind);
}

export function bytPartText(part) {
  if (!part) return "";
  if (part.label !== undefined) return `${part.label} +${bytNum(part.value)}`;
  if (part.term !== undefined) {
    return bytValueFirst(part) ? `${bytNum(part.amount)} ${part.term}`
                               : `${part.term} +${bytNum(part.amount)}`;
  }
  return part.text || "";
}

// One line of a breakdown. Lead icons say what kind of source it is: a civ, a leader, a policy, a
// story. An assigned resource has two, its class and the resource itself. `leadIcon` may be one
// icon or a list.
export function bytPartLine(part, yieldEntry, leadIcon, tone) {
  const line = bytDiv("flex flex-row items-center flex-wrap");
  const toneClass = `text-xs font-body ${tone || "text-accent-3"}`;
  const given = leadIcon || part.sourceIcons || part.sourceIcon;
  const leads = (Array.isArray(given) ? given : [given]).filter(Boolean);
  for (let i = 0; i < leads.length; i++) {
    const lead = icon("size-5 shrink-0", leads[i]);
    lead.style.marginRight = i === leads.length - 1 ? "0.222rem" : "0.055rem";
    line.appendChild(lead);
  }
  const yieldIcon = () => {
    const el = icon("size-5 shrink-0", yieldEntry && yieldEntry.icon);
    el.style.marginLeft = "0.055rem";
    return el;
  };
  if (bytValueFirst(part)) {
    // The value, then the yield, then what it is: "3[S] Base Yield".
    line.appendChild(bytDiv(toneClass, bytNum(part.amount)));
    const el = yieldIcon();
    el.style.marginRight = "0.111rem";
    line.appendChild(el);
    line.appendChild(bytDiv(toneClass, part.term));
    return line;
  }
  // Let long names wrap inside the frame. A flex item will not shrink below its content unless
  // allowed to. Defined inline rather than as a shared helper so our unreleased development tool
  // can patch it into a running game; a live patch cannot add top-level functions.
  const wrap = (el) => {
    el.style.minWidth = "0"; el.style.flexShrink = "1";
    el.style.whiteSpace = "normal"; el.style.overflowWrap = "break-word";
  };
  const text = bytDiv(toneClass, bytPartText(part));
  wrap(text);
  // A guess is dimmed so it is never mistaken for a source the engine named. The amount is still
  // the engine's. No italics: the game's fonts have none.
  if (part.kind === "guess") text.style.opacity = "0.7";
  line.appendChild(text);
  if (part.label !== undefined || part.term !== undefined) line.appendChild(yieldIcon());
  return line;
}

// One Great Work slot, drawn as the Great Works screen draws it: a framed box holding the work's
// image, or empty. The frame is the game's `blp:base_empty-slot` sprite, set inline because
// screen-great-works.css only loads with that screen.
export function bytSlot(slot, size) {
  const el = bytDiv(`${size} shrink-0`);
  el.style.borderImageSource = 'url("blp:base_empty-slot")';
  el.style.borderImageSlice = "8 8 8 8 fill";
  el.style.borderImageWidth = "0.444rem";
  el.style.borderImageRepeat = "stretch stretch";
  el.style.marginRight = "0.222rem";
  if (slot && slot.image) {
    el.style.backgroundImage = slot.image;
    el.style.backgroundSize = "contain";
    el.style.backgroundPosition = "center";
    el.style.backgroundRepeat = "no-repeat";
  }
  return el;
}

function slotStrip(slots, size) {
  const strip = bytDiv("flex flex-row items-center");
  for (const slot of slots) strip.appendChild(bytSlot(slot, size));
  return strip;
}

// A row of pills, one per yield this group produces, matching the plot tooltip's own yield row.
function pillRow(group) {
  const row = bytDiv("flex flex-row flex-wrap items-center");
  for (const y of group.yields || []) {
    const p = pill(y);
    p.style.marginRight = "0.222rem";
    p.style.marginTop = "0.111rem";
    row.appendChild(p);
  }
  return row;
}

// One line per source with every yield it pays: "[wonder] Colosseum +1[F] +1[P] +1[G]". Icons
// first, then the name, then each amount with its yield icon. Unattributed keeps its value-first
// form.
function bonusLines(group) {
  const block = bytDiv("flex flex-col");
  const bySource = new Map();
  for (const y of group.yields || []) {
    for (const part of bytParts(y)) {
      if (part.kind === "specialists") continue;   // drawn once, across yields, below
      const key = `${part.kind === "guess" ? "?" : ""}${part.label !== undefined ? part.label : part.term}`;
      let entry = bySource.get(key);
      if (!entry) { entry = { part, items: [] }; bySource.set(key, entry); }
      entry.items.push({ y, value: part.value !== undefined ? part.value : part.amount });
    }
  }
  for (const { part, items } of bySource.values()) {
    const line = sourceLine(part, items);
    line.style.marginTop = "0.111rem";
    block.appendChild(line);
  }
  if (group.specialists) block.appendChild(specialistLine(group.specialists));
  return block;
}

function sourceLine(part, items) {
  const line = bytDiv("flex flex-row items-center flex-wrap");
  const tone = "text-xs font-body text-accent-3";
  const amounts = (into, plain) => {
    for (const { y, value } of items) {
      into.appendChild(bytDiv(tone, plain ? bytNum(value) : `+${bytNum(value)}`));
      const yi = icon("size-5 shrink-0", y.icon);
      yi.style.marginLeft = "0.055rem";
      yi.style.marginRight = "0.222rem";
      into.appendChild(yi);
    }
  };
  const named = (into, candidate) => {
    const given = candidate.icons || [];
    for (const css of given) {
      const el = icon("size-5 shrink-0", css);
      el.style.marginRight = "0.222rem";
      into.appendChild(el);
    }
    const text = bytDiv(tone, candidate.name);
    text.style.minWidth = "0"; text.style.flexShrink = "1"; text.style.whiteSpace = "normal";
    into.appendChild(text);
  };
  // A guess: amount first, then the candidates, the whole thing dimmed.
  //     +2[S] from [policy] Literature
  //        OR [city-state] Philosopher's Circle
  // With one candidate it reads "+1[F] likely from [icon] X".
  if (part.kind === "guess" && part.candidates && part.candidates.length) {
    const block = bytDiv("flex flex-col");
    block.style.opacity = "0.7";
    const first = bytDiv("flex flex-row items-center flex-wrap");
    amounts(first, false);
    const from = bytDiv(tone, part.candidates.length === 1 ? "likely from" : "from");
    from.style.marginRight = "0.222rem";
    first.appendChild(from);
    named(first, part.candidates[0]);
    block.appendChild(first);
    for (const candidate of part.candidates.slice(1)) {
      const row = bytDiv("flex flex-row items-center");
      row.style.paddingLeft = "0.888rem";
      row.style.marginTop = "0.055rem";
      const or = bytDiv(tone, "OR");
      or.style.marginRight = "0.333rem";
      or.style.fontWeight = "bold";
      row.appendChild(or);
      named(row, candidate);
      block.appendChild(row);
    }
    return block;
  }
  const given = part.sourceIcons || part.sourceIcon;
  const leads = (Array.isArray(given) ? given : [given]).filter(Boolean);
  for (let i = 0; i < leads.length; i++) {
    const lead = icon("size-5 shrink-0", leads[i]);
    lead.style.marginRight = i === leads.length - 1 ? "0.222rem" : "0.055rem";
    line.appendChild(lead);
  }
  // Let long names wrap inside the frame. Defined inline for the same reason as in bytPartLine.
  const wrap = (el) => {
    el.style.minWidth = "0"; el.style.flexShrink = "1";
    el.style.whiteSpace = "normal"; el.style.overflowWrap = "break-word";
  };
  const plain = part.kind === "gap" || part.kind === "base";
  const label = bytDiv(tone, part.label !== undefined ? part.label : part.term);
  label.style.marginRight = "0.333rem";
  wrap(label);
  if (part.kind === "guess") label.style.opacity = "0.7";   // dimmed: see bytPartLine
  line.appendChild(label);
  for (const { y, value } of items) {
    line.appendChild(bytDiv(tone, plain ? bytNum(value) : `+${bytNum(value)}`));
    const yi = icon("size-5 shrink-0", y.icon);
    yi.style.marginLeft = "0.055rem";
    yi.style.marginRight = "0.222rem";
    line.appendChild(yi);
  }
  return line;
}

// "[sp] Specialists 1/2  +3[G] +2[H]": the tile's specialists and everything they pay, on one
// line.
function specialistLine(sp) {
  const line = bytDiv("flex flex-row items-center flex-wrap");
  line.style.marginTop = "0.111rem";
  const tone = "text-xs font-body text-accent-3";
  const lead = icon("size-5 shrink-0", sp.icon);
  lead.style.marginRight = "0.222rem";
  line.appendChild(lead);
  const count = sp.count !== null && sp.count !== undefined && sp.max ? ` ${sp.count}/${sp.max}` : "";
  const label = bytDiv(tone, `Specialists${count}`);
  label.style.marginRight = "0.333rem";
  line.appendChild(label);
  for (const y of sp.yields || []) {
    line.appendChild(bytDiv(tone, `+${bytNum(y.value)}`));
    const yi = icon("size-5 shrink-0", y.icon);
    yi.style.marginLeft = "0.055rem";
    yi.style.marginRight = "0.222rem";
    line.appendChild(yi);
  }
  return line;
}

// A building's yields, laid out like the base tile: pills, then one line per source with every
// yield it pays, then its Great Work slots. The name is left over from an older layout and kept so
// our unreleased development tool can still patch it into a running game.
function yieldTable(group) {
  const table = bytDiv("flex flex-col");
  table.appendChild(pillRow(group));
  table.appendChild(bonusLines(group));

  // Great Work slots on their own line, filled or empty, for every building that has any. The lines
  // above already count what they pay, as "Great Works +6[S]".
  if ((group.slots || []).length) {
    const row = bytDiv("flex flex-row items-center");
    row.style.marginTop = "0.222rem";
    row.style.borderTop = "1px solid rgba(141, 151, 166, 0.18)";
    row.style.paddingTop = "0.222rem";
    row.appendChild(bytDiv("text-xs font-body text-accent-3 mr-2", "Great Works"));
    row.appendChild(slotStrip(group.slots, "size-8"));
    table.appendChild(row);
  }
  return table;
}

// A group (the base tile or one building) laid out like a plot tooltip row: icon and name in the
// left column, a hairline rule, then the numbers.
export function bytGroupRow(group) {
  const row = bytDiv("flex w-full items-center");
  row.style.paddingTop = "0.222rem";
  row.style.paddingBottom = "0.222rem";

  // Wide enough for long names such as "Amphitheater". Longer ones wrap rather than widen the
  // panel.
  const nameCell = bytDiv("w-40 shrink-0 flex items-center");
  nameCell.appendChild(icon("size-8 shrink-0", group.icon));
  const name = bytDiv("font-title text-sm ml-2 leading-tight break-words", group.name);
  nameCell.appendChild(name);
  row.appendChild(nameCell);

  row.appendChild(bytDiv("w-px self-stretch bg-accent-2 opacity-30 mx-2"));

  const content = bytDiv("flex flex-col justify-start flex-auto");
  content.style.minWidth = "0";
  if (group.isPlot) {
    content.appendChild(pillRow(group));
    content.appendChild(bonusLines(group));
    // No appeal line. Where appeal adds to the tile's yield, it is named among the bonuses above.
  } else {
    content.appendChild(yieldTable(group));
  }
  row.appendChild(content);
  return row;
}

export function bytDivider() {
  const el = bytDiv("h-px flex-auto bg-accent-2 opacity-30");
  el.style.marginTop = "0.222rem";
  el.style.marginBottom = "0.222rem";
  return el;
}

// The tile's total per yield, one pill each. Summed from the groups so the total and the rows can
// never disagree. If they add up to something the plot tooltip does not show, that is worth seeing.
export function bytTotals(data) {
  const order = [];
  const byKey = new Map();
  for (const group of (data && data.groups) || []) {
    for (const y of group.yields || []) {
      // Keyed by name, which every row has. `type` would be better, but a fixture may leave it out.
      const key = y.name || y.type;
      let entry = byKey.get(key);
      if (!entry) {
        entry = { icon: y.icon, name: y.name, type: y.type, total: 0 };
        byKey.set(key, entry);
        order.push(entry);
      }
      entry.total += y.total || 0;
    }
  }
  return order.filter((entry) => entry.total);
}

function totalsRow(data) {
  const totals = bytTotals(data);
  if (!totals.length) return null;
  const wrap = bytDiv("flex flex-col items-center");
  wrap.style.marginTop = "0.222rem";
  wrap.appendChild(bytDiv("font-title text-xs uppercase text-accent-3", "Tile Total"));
  const row = bytDiv("flex flex-row flex-wrap items-center justify-center");
  for (const total of totals) {
    const p = pill(total);
    p.style.marginRight = "0.222rem";
    p.style.marginTop = "0.111rem";
    row.appendChild(p);
  }
  wrap.appendChild(row);
  return wrap;
}

export function bytHeader(data) {
  const head = bytDiv("flex flex-col items-stretch");
  head.appendChild(bytDiv("font-title uppercase text-gradient-secondary text-center", "Yield Breakdown"));
  // No coordinates or settlement name: the plot tooltip behind this one already shows where it is.
  // No appeal line either; appeal shows as a bonus on the Base Tile row when it pays.
  const totals = totalsRow(data);
  if (totals) head.appendChild(totals);
  return head;
}

export function bytMessage(text) {
  const el = bytDiv("text-xs font-body text-accent-3 text-center", text);
  el.style.marginTop = "0.222rem";
  return el;
}

// The whole panel: the header, then one row per group.
export function bytPanel(data) {
  const nodes = [bytHeader(data)];
  const groups = (data && data.groups) || [];
  if (!groups.length) {
    nodes.push(bytMessage(data && data.emptyMessage
      ? data.emptyMessage
      : "Nothing here is producing a yield the city accounts for."));
    return nodes;
  }
  for (let i = 0; i < groups.length; i++) {
    nodes.push(bytDivider());
    nodes.push(bytGroupRow(groups[i]));
  }
  return nodes;
}
