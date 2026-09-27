// Reference fixture sets for the mock, one per game worth keeping. To add one, move a harvested
// tools/mock/fixtures.js here under a name for the game (age and leader, such as
// exploration-harriet.js), give it a header like antiquity-augustus.js, and list it below.
import { FIXTURES as ANTIQUITY_AUGUSTUS } from "./antiquity-augustus.js";

export const SETS = [
  { name: "Antiquity - Augustus (Rome), turn 35, 5 settlements", fixtures: ANTIQUITY_AUGUSTUS },
];
