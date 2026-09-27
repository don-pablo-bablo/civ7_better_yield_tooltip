# Contributing

## How it works

The mod adds a nested tooltip to the plot tooltip.

| path | what it is |
|---|---|
| `mod/better-yield-tooltip/` | the mod itself |
| `.../ui/byt-yield-panel.js` | rendering only: plain data in, DOM out, no engine calls, no imports |
| `.../ui/byt-yield-tooltip.js` | gathers the data and hosts the tooltip by overriding `YieldBar` through `ComponentRegistry` |
| `tools/mock/yield-panel.html` | draws the panel in a browser from saved fixtures |
| `tools/mock/fixtures.js` | the latest harvest from a game |
| `tools/mock/fixtures/` | reference sets, one file per game worth keeping, listed in `index.js` |
| `reference` | gitignored link to the game's resources folder |

Read the header comment in `byt-yield-tooltip.js` before changing it. The
tooltip hangs off `YieldBar` because nesting only works from inside the plot
tooltip's own Solid tree, and `YieldBar` is the one registered component there.
Its imports are relative (`../../core/...`), so the scripts must stay exactly
one folder below the mod root.

## The browser mock

`byt-yield-panel.js` has no game code in it, so the layout can be worked on in
a browser. The mock page needs the game's own stylesheet, which is not
included. Link the game's resources folder, the one that contains `Base`, as
`reference` in the repo root. Then run this from the repo root:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000/tools/mock/yield-panel.html>. It draws the panel
from every fixture in `tools/mock/`.

Check layout changes in game as well. The mock missed that the game has no
italic font.

## Fixtures

The fixtures were captured from real games with a development tool we use that
has not been released publicly yet. Until it is, you can view the saved games
in the mock but not capture new ones.

For reference, this is how capture works. With `BYT_DUMP_FIXTURES` on, the
tooltip writes each breakdown it opens to UI.log as a record tagged
`[C7LAB]`, the tool's format. Long records are split into chunks so they
survive UI.log's line limit. To write one for every tile you own, run this in
the game's UI debug console:

```js
window.dispatchEvent(new CustomEvent('byt-export-all'))
```

It logs `[BYT] yield-tooltip: export-all: N fixture(s) ...` when done. UI.log
is emptied at every launch, so collect it before relaunching. The tool then
turns the records into `tools/mock/fixtures.js`.

`fixtures/antiquity-augustus.js` is a late Antiquity Rome game: 236 yield rows
over 5 settlements, none Unattributed, 6 guesses.

## Code rules

- **Build stamp**: each script has one (`BYT_BUILD`, `BYT_PANEL_BUILD`). Bump it
  on every edit. Both are logged at load with the `[BYT]` tag, which shows
  which version the game loaded.
- **Log and bail, never throw**: the tooltip lives inside the game's plot
  tooltip, and a throw there breaks the game's UI as well as ours.
  `console.error` reaches UI.log; `console.log` does not. Tag log lines `[BYT]`.
- **Load-time code**: a new top-level constant, table or listener only takes
  effect after a game restart. So does a new file or a modinfo change.
- **Engine APIs**: prefer what the game's own UI code uses. Anything else must
  be wrapped so a failure falls back gracefully, and marked UNOFFICIAL where it
  is called. Current unofficial calls: `player.Stories.getNumArchived`,
  `getArchived` and `getStoryStateName`, used to name story-event rewards.
- **Italics**: do not use them. The game's fonts have no italic face and italic
  text does not render at all. Guesses are drawn dimmer instead.

## Attribution rules

These decide what the player sees.

- Every number is the engine's. The tree is counted once per yield, at its
  lowest named level. Nothing we add changes a total or a part's amount.
- A source is **named** only when the arithmetic confirms it exactly. That can
  be one of the player's bonuses (civ, leader, policy, tech, civic, attribute,
  completed story, city-state suzerain bonus, legacy milestone, resource
  assigned to that settlement, town focus) aimed at this building and yield in
  exactly the missing amount. It can also be several that add up to it exactly,
  or the building's own database yield, alone or with those bonuses.
- Otherwise the line is a **best guess**: the kinds of thing that could pay it,
  taken from the database, minus the kinds already checked and ruled out. A
  guess must never look wrong or change a figure. It is drawn dimmer with the
  amount first: "+2[S] from [policy] Literature", with alternatives indented
  under "OR", each icon beside its own name. A single candidate reads
  "+1[F] likely from [icon] X".
- Tile-level steps the engine leaves unnamed are matched the same way against
  bonuses that add yield to tiles (`EFFECT_PLOT_ADJUST_YIELD`). Bonuses that
  carry a Tooltip are left out, since the engine names those itself.
- An engine "Player Bonus" is named as the one bonus that equals it, or all of
  them together where they add up to it exactly. Where two could each be it,
  the line is a guess. There is no separate bonuses list.
- Whatever is left is **Unattributed**.

## Layout

The pill row, then one line per source across all yields, for buildings and
the base tile alike. Specialists get one line. Per-settlement deductions such
as specialist upkeep and building maintenance are out of scope, since they are
not tile yields.

## Before a release

- Set `BYT_DUMP_FIXTURES` to `false`. Players do not need a log record per
  tooltip.
- Check that the header comments in `byt-yield-tooltip.js` still describe the
  code.
- Bump `version` in the modinfo.

## Known gaps

- Only one game state has been checked in detail. Exploration and Modern age
  games, other civs and leaders, and coastal or wonder-heavy empires are the
  likely source of new kinds of bonus.
- Another mod that overrides `YieldBar` would compete with this one on
  priority. We register at 1.

## Writing style

This applies to docs, comments and commit messages.

Plain English, blunt, short. If ten words will do, do not write a hundred. The
reader is busy and wants the important bits. The prose stays neutral
international English. Avoid buzzwords and jargon unless there is no other way
to say it.

- **Em-dashes**: do not use them. Use a colon, a semicolon or a separate
  sentence.
- **Contrasts**: do not over-use "X, not Y". Vary it with "rather than",
  "instead of" or a plain restatement.
- **Asides**: keep brackets rare. Move a secondary thought into its own
  sentence. Terse labels in reference tables are fine.
- **Headings**: sentence case. Write bulleted definitions as
  **term**: description.
- **Program output**: quote it verbatim, including punctuation and symbols.
- **Filler**: every sentence must add a fact, an example or a consequence.
  Do not write meta-framing such as "X is the default; Y is the exception".
  State the rule and give the case.
- **Names**: do not name individual people in the code, docs or commits.

## Commit messages

Plain English, imperative mood, no Conventional Commit prefixes. A subject line
is often the whole message. Add a body only when the reason is not obvious,
and keep it to a sentence or two. Do not write bulleted essays or restate the
diff.
