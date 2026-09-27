// A reference set: every panel the tooltip drew in one game, kept for the mock.
//
// Game: Augustus (Rome), late Antiquity, turn 35, 5 settlements: Roma, Capua, Ostia, Patavium and
// Aquileia. One reading per tile, from build byt-14 / panel-10. 48 panels and 236 yield rows, none
// Unattributed. 6 rows are guesses: Library and Academy "+2 from Literature OR Philosopher's
// Circle".
//
// Covers assigned resources, city-state bonuses, a legacy, story rewards, attribute nodes, a town
// focus, specialists and wonders on tiles.
export const FIXTURES = [
 {
  "label": "Roma (42,7)",
  "cityName": "Roma",
  "loc": {
   "x": 42,
   "y": 7
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Base Tile",
    "isPlot": true,
    "icon": null,
    "specialists": {
     "icon": "url('blp:agecard_crisis_specialists')",
     "count": 1,
     "max": 2,
     "yields": [
      {
       "type": "YIELD_SCIENCE",
       "icon": "url('blp:Yield_Science')",
       "value": 4
      },
      {
       "type": "YIELD_CULTURE",
       "icon": "url('blp:Yield_Culture')",
       "value": 4
      },
      {
       "type": "YIELD_HAPPINESS",
       "icon": "url('blp:Yield_Happiness')",
       "value": 1
      }
     ]
    },
    "slots": [],
    "yields": [
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "Blacksmith",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:buildicon_blacksmith')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Princeps Civitatis I",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Princeps Civitatis I",
        "amount": 1,
        "icon": "url('blp:Yield_Production')",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Colosseum",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:wondericon_colosseum')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 6,
      "gap": 0,
      "parts": [
       {
        "label": "God of Wisdom",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Specialists",
        "value": 4,
        "kind": "specialists",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "God of Wisdom",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null
       },
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 7,
      "gap": 0,
      "parts": [
       {
        "label": "Twelve Tables",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Pyramid Of The Sun",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:wondericon_pyramidsun')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Specialists",
        "value": 4,
        "kind": "specialists",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Twelve Tables",
        "amount": 1,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "label": "Arena",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:buildicon_arena')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Colosseum",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:wondericon_colosseum')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Specialists",
        "value": 1,
        "kind": "specialists",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   },
   {
    "name": "Altar",
    "isPlot": false,
    "icon": "url('blp:buildicon_altar')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 4,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 1,
        "term": "Adjacency",
        "kind": "adjacency",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   },
   {
    "name": "Palace",
    "isPlot": false,
    "icon": "url('fs://game/buildicon_palace')",
    "specialists": null,
    "slots": [
     {
      "name": "Codex",
      "image": "url(\"fs://game/gw_palmleaftexts.png\")",
      "empty": false
     }
    ],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 5,
      "gap": 0,
      "parts": [
       {
        "amount": 5,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 5,
      "gap": 0,
      "parts": [
       {
        "amount": 5,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Economic Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_economic')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Economic Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Gold')",
        "sourceIcon": "url('fs://game/att_economic')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 7,
      "gap": 0,
      "parts": [
       {
        "amount": 4,
        "term": "Adjacency",
        "kind": "adjacency",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 2,
        "term": "Great Works",
        "kind": "greatWorks",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 5,
      "gap": 0,
      "parts": [
       {
        "amount": 4,
        "term": "Adjacency",
        "kind": "adjacency",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Cultural Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_cultural')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Cultural Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('fs://game/att_cultural')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 5,
      "gap": 0,
      "parts": [
       {
        "amount": 5,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Roma (43,8)",
  "cityName": "Roma",
  "loc": {
   "x": 43,
   "y": 8
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Base Tile",
    "isPlot": true,
    "icon": null,
    "specialists": {
     "icon": "url('blp:agecard_crisis_specialists')",
     "count": 2,
     "max": 2,
     "yields": [
      {
       "type": "YIELD_SCIENCE",
       "icon": "url('blp:Yield_Science')",
       "value": 12
      }
     ]
    },
    "slots": [],
    "yields": [
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "Blacksmith",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:buildicon_blacksmith')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Princeps Civitatis I",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Princeps Civitatis I",
        "amount": 1,
        "icon": "url('blp:Yield_Production')",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Colosseum",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:wondericon_colosseum')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 14,
      "gap": 0,
      "parts": [
       {
        "label": "God of Wisdom",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Specialists",
        "value": 12,
        "kind": "specialists",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "God of Wisdom",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null
       },
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "label": "Twelve Tables",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Pyramid Of The Sun",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:wondericon_pyramidsun')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Twelve Tables",
        "amount": 1,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "Arena",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:buildicon_arena')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Colosseum",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:wondericon_colosseum')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   },
   {
    "name": "Academy",
    "isPlot": false,
    "icon": "url('blp:buildicon_academy')",
    "specialists": null,
    "slots": [
     {
      "name": "Codex",
      "image": "url(\"fs://game/gw_palmleaftexts.png\")",
      "empty": false
     },
     {
      "name": "Codex",
      "image": "url(\"fs://game/gw_rotulus.png\")",
      "empty": false
     },
     {
      "name": "Codex",
      "image": "url(\"fs://game/gw_horizontalscroll.png\")",
      "empty": false
     }
    ],
    "yields": [
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 17,
      "gap": 0,
      "parts": [
       {
        "amount": 6,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 3,
        "term": "Adjacency",
        "kind": "adjacency",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 6,
        "term": "Great Works",
        "kind": "greatWorks",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Likely: Literature or Philosopher's Circle",
        "value": 2,
        "kind": "guess",
        "sourceIcon": null,
        "sourceIcons": [
         "url('blp:icon_policy')",
         "url('blp:bonustype_scientific.png')"
        ],
        "candidates": [
         {
          "name": "Literature",
          "icons": [
           "url('blp:icon_policy')"
          ]
         },
         {
          "name": "Philosopher's Circle",
          "icons": [
           "url('blp:bonustype_scientific.png')"
          ]
         }
        ]
       }
      ],
      "abilities": [
       {
        "name": "Literature",
        "amount": 2,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:icon_policy')",
        "sourceIcons": null
       },
       {
        "name": "Philosopher's Circle",
        "amount": 2,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:bonustype_scientific.png')",
        "sourceIcons": null
       }
      ]
     }
    ]
   },
   {
    "name": "Library",
    "isPlot": false,
    "icon": "url('blp:buildicon_library')",
    "specialists": null,
    "slots": [
     {
      "name": "Codex",
      "image": "url(\"fs://game/gw_rotulus.png\")",
      "empty": false
     },
     {
      "name": "Codex",
      "image": "url(\"fs://game/gw_rotulus.png\")",
      "empty": false
     }
    ],
    "yields": [
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 14,
      "gap": 0,
      "parts": [
       {
        "amount": 5,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 3,
        "term": "Adjacency",
        "kind": "adjacency",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 4,
        "term": "Great Works",
        "kind": "greatWorks",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Likely: Literature or Philosopher's Circle",
        "value": 2,
        "kind": "guess",
        "sourceIcon": null,
        "sourceIcons": [
         "url('blp:icon_policy')",
         "url('blp:bonustype_scientific.png')"
        ],
        "candidates": [
         {
          "name": "Literature",
          "icons": [
           "url('blp:icon_policy')"
          ]
         },
         {
          "name": "Philosopher's Circle",
          "icons": [
           "url('blp:bonustype_scientific.png')"
          ]
         }
        ]
       }
      ],
      "abilities": [
       {
        "name": "Literature",
        "amount": 2,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:icon_policy')",
        "sourceIcons": null
       },
       {
        "name": "Philosopher's Circle",
        "amount": 2,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:bonustype_scientific.png')",
        "sourceIcons": null
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "label": "Roma (41,7)",
  "cityName": "Roma",
  "loc": {
   "x": 41,
   "y": 7
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Base Tile",
    "isPlot": true,
    "icon": null,
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "Blacksmith",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:buildicon_blacksmith')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Princeps Civitatis I",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Princeps Civitatis I",
        "amount": 1,
        "icon": "url('blp:Yield_Production')",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Colosseum",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:wondericon_colosseum')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "God of Wisdom",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "God of Wisdom",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null
       },
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "label": "Twelve Tables",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Pyramid Of The Sun",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:wondericon_pyramidsun')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Twelve Tables",
        "amount": 1,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "Arena",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:buildicon_arena')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Colosseum",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:wondericon_colosseum')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   },
   {
    "name": "Brickyard",
    "isPlot": false,
    "icon": "url('blp:buildicon_brickyard')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Assigned",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:resicon_crabs')",
        "sourceIcons": [
         "url('blp:restype_bonus_v2')",
         "url('blp:resicon_crabs')"
        ],
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Assigned",
        "amount": 1,
        "icon": "url('blp:Yield_Food')",
        "sourceIcon": "url('blp:resicon_crabs')",
        "sourceIcons": [
         "url('blp:restype_bonus_v2')",
         "url('blp:resicon_crabs')"
        ]
       }
      ]
     },
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   },
   {
    "name": "Granary",
    "isPlot": false,
    "icon": "url('blp:buildicon_granary')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Assigned",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:resicon_crabs')",
        "sourceIcons": [
         "url('blp:restype_bonus_v2')",
         "url('blp:resicon_crabs')"
        ],
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Assigned",
        "amount": 1,
        "icon": "url('blp:Yield_Food')",
        "sourceIcon": "url('blp:resicon_crabs')",
        "sourceIcons": [
         "url('blp:restype_bonus_v2')",
         "url('blp:resicon_crabs')"
        ]
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "label": "Roma (43,6)",
  "cityName": "Roma",
  "loc": {
   "x": 43,
   "y": 6
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Base Tile",
    "isPlot": true,
    "icon": null,
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "Blacksmith",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:buildicon_blacksmith')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Princeps Civitatis I",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Princeps Civitatis I",
        "amount": 1,
        "icon": "url('blp:Yield_Production')",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Colosseum",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:wondericon_colosseum')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "God of Wisdom",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "God of Wisdom",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null
       },
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "label": "Twelve Tables",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Pyramid Of The Sun",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:wondericon_pyramidsun')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Twelve Tables",
        "amount": 1,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "Arena",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:buildicon_arena')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Colosseum",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:wondericon_colosseum')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   },
   {
    "name": "Amphitheater",
    "isPlot": false,
    "icon": "url('blp:buildicon_amphitheater')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "Traditional ancestral histories",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:ntf_choosenarrative')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Traditional ancestral histories",
        "amount": 2,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:ntf_choosenarrative')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 6,
      "gap": 0,
      "parts": [
       {
        "amount": 4,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Drama and Poetry",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_policy')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Drama and Poetry",
        "amount": 2,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:icon_policy')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "I Know That I Know Nothing",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:victory_cultural')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "I Know That I Know Nothing",
        "amount": 1,
        "icon": "url('blp:Yield_Happiness')",
        "sourceIcon": "url('blp:victory_cultural')",
        "sourceIcons": null
       }
      ]
     }
    ]
   },
   {
    "name": "Monument",
    "isPlot": false,
    "icon": "url('blp:buildicon_monument')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 7,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Drama and Poetry",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_policy')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Cursus Honorum",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Drama and Poetry",
        "amount": 2,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:icon_policy')",
        "sourceIcons": null
       },
       {
        "name": "Cursus Honorum",
        "amount": 2,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "I Know That I Know Nothing",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:victory_cultural')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "I Know That I Know Nothing",
        "amount": 1,
        "icon": "url('blp:Yield_Happiness')",
        "sourceIcon": "url('blp:victory_cultural')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_DIPLOMACY",
      "name": "Influence",
      "icon": "url('blp:yield_influence')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "amount": 2,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Roma (42,6)",
  "cityName": "Roma",
  "loc": {
   "x": 42,
   "y": 6
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Base Tile",
    "isPlot": true,
    "icon": null,
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Princeps Civitatis I",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Princeps Civitatis I",
        "amount": 1,
        "icon": "url('blp:Yield_Production')",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Twelve Tables",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Twelve Tables",
        "amount": 1,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null
       }
      ]
     }
    ]
   },
   {
    "name": "Saw Pit",
    "isPlot": false,
    "icon": "url('blp:buildicon_sawpit')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Assigned",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:resicon_crabs')",
        "sourceIcons": [
         "url('blp:restype_bonus_v2')",
         "url('blp:resicon_crabs')"
        ],
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Assigned",
        "amount": 1,
        "icon": "url('blp:Yield_Food')",
        "sourceIcon": "url('blp:resicon_crabs')",
        "sourceIcons": [
         "url('blp:restype_bonus_v2')",
         "url('blp:resicon_crabs')"
        ]
       }
      ]
     },
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Roma (43,7)",
  "cityName": "Roma",
  "loc": {
   "x": 43,
   "y": 7
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Base Tile",
    "isPlot": true,
    "icon": null,
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "Blacksmith",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:buildicon_blacksmith')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Princeps Civitatis I",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Princeps Civitatis I",
        "amount": 1,
        "icon": "url('blp:Yield_Production')",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Colosseum",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:wondericon_colosseum')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "God of Wisdom",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "God of Wisdom",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null
       },
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "label": "Twelve Tables",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Pyramid Of The Sun",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:wondericon_pyramidsun')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Twelve Tables",
        "amount": 1,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "Arena",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:buildicon_arena')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Colosseum",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:wondericon_colosseum')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   },
   {
    "name": "Bath",
    "isPlot": false,
    "icon": "url('blp:buildicon_bath')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 5,
      "gap": 0,
      "parts": [
       {
        "amount": 4,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 1,
        "term": "Adjacency",
        "kind": "adjacency",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   },
   {
    "name": "Villa",
    "isPlot": false,
    "icon": "url('blp:buildicon_villa')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "Cursus Honorum",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Cursus Honorum",
        "amount": 2,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_DIPLOMACY",
      "name": "Influence",
      "icon": "url('blp:yield_influence')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Roma (42,8)",
  "cityName": "Roma",
  "loc": {
   "x": 42,
   "y": 8
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Angkor Wat",
    "isPlot": false,
    "icon": "url('blp:wondericon_angkor')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Roma (42,9)",
  "cityName": "Roma",
  "loc": {
   "x": 42,
   "y": 9
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Plantation",
    "isPlot": false,
    "icon": "url('blp:impicon_plant')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Warehouse",
        "kind": "warehouse",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Natural Yield",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Natural Yield",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "From Resources",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Appeal Bonus",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Roma (43,10)",
  "cityName": "Roma",
  "loc": {
   "x": 43,
   "y": 10
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Megalith",
    "isPlot": false,
    "icon": "url('blp:impicon_megalith')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 4,
      "gap": 0,
      "parts": [
       {
        "amount": 2,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 1,
        "term": "Adjacency",
        "kind": "adjacency",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 1,
        "term": "Warehouse",
        "kind": "warehouse",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "amount": 2,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "Appeal Bonus",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Roma (43,9)",
  "cityName": "Roma",
  "loc": {
   "x": 43,
   "y": 9
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Pyramid Of The Sun",
    "isPlot": false,
    "icon": "url('blp:wondericon_pyramidsun')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Roma (44,8)",
  "cityName": "Roma",
  "loc": {
   "x": 44,
   "y": 8
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Base Tile",
    "isPlot": true,
    "icon": null,
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "Blacksmith",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:buildicon_blacksmith')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Princeps Civitatis I",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Princeps Civitatis I",
        "amount": 1,
        "icon": "url('blp:Yield_Production')",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Colosseum",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:wondericon_colosseum')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "God of Wisdom",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "God of Wisdom",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null
       },
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "label": "Twelve Tables",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Pyramid Of The Sun",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:wondericon_pyramidsun')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Twelve Tables",
        "amount": 1,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "Arena",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:buildicon_arena')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Colosseum",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:wondericon_colosseum')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   },
   {
    "name": "Basilica",
    "isPlot": false,
    "icon": "url('blp:buildicon_basilica')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Adjacency",
        "kind": "adjacency",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "Cursus Honorum",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Cursus Honorum",
        "amount": 2,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_DIPLOMACY",
      "name": "Influence",
      "icon": "url('blp:yield_influence')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   },
   {
    "name": "Temple of Jupiter",
    "isPlot": false,
    "icon": "url('blp:buildicon_templeofjupiter')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Adjacency",
        "kind": "adjacency",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Roma (44,9)",
  "cityName": "Roma",
  "loc": {
   "x": 44,
   "y": 9
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Base Tile",
    "isPlot": true,
    "icon": null,
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "Blacksmith",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:buildicon_blacksmith')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Princeps Civitatis I",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Princeps Civitatis I",
        "amount": 1,
        "icon": "url('blp:Yield_Production')",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Colosseum",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:wondericon_colosseum')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "God of Wisdom",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "God of Wisdom",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null
       },
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "label": "Twelve Tables",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Pyramid Of The Sun",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:wondericon_pyramidsun')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Twelve Tables",
        "amount": 1,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "Arena",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:buildicon_arena')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Colosseum",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:wondericon_colosseum')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   },
   {
    "name": "Garden",
    "isPlot": false,
    "icon": "url('blp:buildicon_garden')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 6,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 3,
        "term": "Adjacency",
        "kind": "adjacency",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "amount": 2,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   },
   {
    "name": "Market",
    "isPlot": false,
    "icon": "url('blp:buildicon_market')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 6,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 3,
        "term": "Adjacency",
        "kind": "adjacency",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Roma (44,7)",
  "cityName": "Roma",
  "loc": {
   "x": 44,
   "y": 7
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Base Tile",
    "isPlot": true,
    "icon": null,
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Princeps Civitatis I",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Princeps Civitatis I",
        "amount": 1,
        "icon": "url('blp:Yield_Production')",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Twelve Tables",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Twelve Tables",
        "amount": 1,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null
       }
      ]
     }
    ]
   },
   {
    "name": "Lighthouse",
    "isPlot": false,
    "icon": "url('blp:buildicon_lighthouse')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 5,
      "gap": 0,
      "parts": [
       {
        "amount": 4,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 1,
        "term": "Adjacency",
        "kind": "adjacency",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Roma (45,8)",
  "cityName": "Roma",
  "loc": {
   "x": 45,
   "y": 8
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Base Tile",
    "isPlot": true,
    "icon": null,
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "Blacksmith",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:buildicon_blacksmith')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Princeps Civitatis I",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Princeps Civitatis I",
        "amount": 1,
        "icon": "url('blp:Yield_Production')",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Colosseum",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:wondericon_colosseum')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "God of Wisdom",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "God of Wisdom",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null
       },
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "label": "Twelve Tables",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Pyramid Of The Sun",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:wondericon_pyramidsun')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Twelve Tables",
        "amount": 1,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "Arena",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:buildicon_arena')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Colosseum",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:wondericon_colosseum')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   },
   {
    "name": "Fishing Quay",
    "isPlot": false,
    "icon": "url('blp:buildicon_fishingquay')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Assigned",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:resicon_crabs')",
        "sourceIcons": [
         "url('blp:restype_bonus_v2')",
         "url('blp:resicon_crabs')"
        ],
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Assigned",
        "amount": 1,
        "icon": "url('blp:Yield_Food')",
        "sourceIcon": "url('blp:resicon_crabs')",
        "sourceIcons": [
         "url('blp:restype_bonus_v2')",
         "url('blp:resicon_crabs')"
        ]
       }
      ]
     }
    ]
   },
   {
    "name": "Harbor",
    "isPlot": false,
    "icon": "url('blp:buildicon_harbor')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Assigned",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:resicon_crabs')",
        "sourceIcons": [
         "url('blp:restype_bonus_v2')",
         "url('blp:resicon_crabs')"
        ],
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Assigned",
        "amount": 1,
        "icon": "url('blp:Yield_Food')",
        "sourceIcon": "url('blp:resicon_crabs')",
        "sourceIcons": [
         "url('blp:restype_bonus_v2')",
         "url('blp:resicon_crabs')"
        ]
       }
      ]
     },
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Roma (43,5)",
  "cityName": "Roma",
  "loc": {
   "x": 43,
   "y": 5
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Base Tile",
    "isPlot": true,
    "icon": null,
    "specialists": {
     "icon": "url('blp:agecard_crisis_specialists')",
     "count": 2,
     "max": 2,
     "yields": [
      {
       "type": "YIELD_PRODUCTION",
       "icon": "url('blp:Yield_Production')",
       "value": 12
      }
     ]
    },
    "slots": [],
    "yields": [
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 14,
      "gap": 0,
      "parts": [
       {
        "label": "Blacksmith",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:buildicon_blacksmith')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Specialists",
        "value": 12,
        "kind": "specialists",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Princeps Civitatis I",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Princeps Civitatis I",
        "amount": 1,
        "icon": "url('blp:Yield_Production')",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Colosseum",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:wondericon_colosseum')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "God of Wisdom",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "God of Wisdom",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null
       },
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "label": "Twelve Tables",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Pyramid Of The Sun",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:wondericon_pyramidsun')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Twelve Tables",
        "amount": 1,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "Arena",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:buildicon_arena')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Colosseum",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:wondericon_colosseum')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   },
   {
    "name": "Barracks",
    "isPlot": false,
    "icon": "url('blp:buildicon_barracks')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 6,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 3,
        "term": "Adjacency",
        "kind": "adjacency",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "Cursus Honorum",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Cursus Honorum",
        "amount": 2,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null
       }
      ]
     }
    ]
   },
   {
    "name": "Blacksmith",
    "isPlot": false,
    "icon": "url('blp:buildicon_blacksmith')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 7,
      "gap": 0,
      "parts": [
       {
        "amount": 4,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 3,
        "term": "Adjacency",
        "kind": "adjacency",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Roma (42,5)",
  "cityName": "Roma",
  "loc": {
   "x": 42,
   "y": 5
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Quarry",
    "isPlot": false,
    "icon": "url('blp:impicon_quarry')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Warehouse",
        "kind": "warehouse",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Natural Yield",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "From Resources",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Roma (44,6)",
  "cityName": "Roma",
  "loc": {
   "x": 44,
   "y": 6
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Base Tile",
    "isPlot": true,
    "icon": null,
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Princeps Civitatis I",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Princeps Civitatis I",
        "amount": 1,
        "icon": "url('blp:Yield_Production')",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Twelve Tables",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Twelve Tables",
        "amount": 1,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null
       }
      ]
     }
    ]
   },
   {
    "name": "Arena",
    "isPlot": false,
    "icon": "url('blp:buildicon_arena')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 5,
      "gap": 0,
      "parts": [
       {
        "amount": 4,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 1,
        "term": "Adjacency",
        "kind": "adjacency",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Roma (44,4)",
  "cityName": "Roma",
  "loc": {
   "x": 44,
   "y": 4
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Mine",
    "isPlot": false,
    "icon": "url('blp:impicon_mine')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Warehouse",
        "kind": "warehouse",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Natural Yield",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "From Resources",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Appeal Bonus",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Roma (44,5)",
  "cityName": "Roma",
  "loc": {
   "x": 44,
   "y": 5
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Colosseum",
    "isPlot": false,
    "icon": "url('blp:wondericon_colosseum')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Capua (45,11)",
  "cityName": "Capua",
  "loc": {
   "x": 45,
   "y": 11
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Base Tile",
    "isPlot": true,
    "icon": null,
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "label": "God of Wisdom",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Urban Center",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:focus_urban')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "God of Wisdom",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null
       },
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       },
       {
        "name": "Urban Center",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:focus_urban')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "Twelve Tables",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Urban Center",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:focus_urban')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Twelve Tables",
        "amount": 1,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null
       },
       {
        "name": "Urban Center",
        "amount": 1,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:focus_urban')",
        "sourceIcons": null
       }
      ]
     }
    ]
   },
   {
    "name": "Altar",
    "isPlot": false,
    "icon": "url('blp:buildicon_altar')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   },
   {
    "name": "City Hall",
    "isPlot": false,
    "icon": "url('fs://game/buildicon_cityhall')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Economic Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_economic')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Economic Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Gold')",
        "sourceIcon": "url('fs://game/att_economic')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Cultural Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_cultural')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Cultural Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('fs://game/att_cultural')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Capua (46,10)",
  "cityName": "Capua",
  "loc": {
   "x": 46,
   "y": 10
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Base Tile",
    "isPlot": true,
    "icon": null,
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "label": "God of Wisdom",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Urban Center",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:focus_urban')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "God of Wisdom",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null
       },
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       },
       {
        "name": "Urban Center",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:focus_urban')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Urban Center",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:focus_urban')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Urban Center",
        "amount": 1,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:focus_urban')",
        "sourceIcons": null
       }
      ]
     }
    ]
   },
   {
    "name": "Fishing Quay",
    "isPlot": false,
    "icon": "url('blp:buildicon_fishingquay')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   },
   {
    "name": "Harbor",
    "isPlot": false,
    "icon": "url('blp:buildicon_harbor')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Capua (46,11)",
  "cityName": "Capua",
  "loc": {
   "x": 46,
   "y": 11
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Fishing Boat",
    "isPlot": false,
    "icon": "url('blp:impicon_fishing')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 1,
        "term": "Warehouse",
        "kind": "warehouse",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Warehouse",
        "kind": "warehouse",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Natural Yield",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Capua (45,12)",
  "cityName": "Capua",
  "loc": {
   "x": 45,
   "y": 12
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Ancient Bridge",
    "isPlot": false,
    "icon": "url('blp:buildicon_ancbridge')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 4,
      "gap": 0,
      "parts": [
       {
        "amount": 4,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Capua (44,13)",
  "cityName": "Capua",
  "loc": {
   "x": 44,
   "y": 13
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Base Tile",
    "isPlot": true,
    "icon": null,
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "label": "God of Wisdom",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Urban Center",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:focus_urban')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "God of Wisdom",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null
       },
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       },
       {
        "name": "Urban Center",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:focus_urban')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Urban Center",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:focus_urban')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Urban Center",
        "amount": 1,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:focus_urban')",
        "sourceIcons": null
       }
      ]
     }
    ]
   },
   {
    "name": "Amphitheater",
    "isPlot": false,
    "icon": "url('blp:buildicon_amphitheater')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "Traditional ancestral histories",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:ntf_choosenarrative')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Traditional ancestral histories",
        "amount": 2,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:ntf_choosenarrative')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 6,
      "gap": 0,
      "parts": [
       {
        "amount": 4,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Drama and Poetry",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_policy')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Drama and Poetry",
        "amount": 2,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:icon_policy')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "I Know That I Know Nothing",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:victory_cultural')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "I Know That I Know Nothing",
        "amount": 1,
        "icon": "url('blp:Yield_Happiness')",
        "sourceIcon": "url('blp:victory_cultural')",
        "sourceIcons": null
       }
      ]
     }
    ]
   },
   {
    "name": "Monument",
    "isPlot": false,
    "icon": "url('blp:buildicon_monument')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 7,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Drama and Poetry",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_policy')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Cursus Honorum",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Drama and Poetry",
        "amount": 2,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:icon_policy')",
        "sourceIcons": null
       },
       {
        "name": "Cursus Honorum",
        "amount": 2,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "I Know That I Know Nothing",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:victory_cultural')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "I Know That I Know Nothing",
        "amount": 1,
        "icon": "url('blp:Yield_Happiness')",
        "sourceIcon": "url('blp:victory_cultural')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_DIPLOMACY",
      "name": "Influence",
      "icon": "url('blp:yield_influence')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "amount": 2,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Capua (44,14)",
  "cityName": "Capua",
  "loc": {
   "x": 44,
   "y": 14
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Base Tile",
    "isPlot": true,
    "icon": null,
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "label": "God of Wisdom",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Urban Center",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:focus_urban')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "God of Wisdom",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null
       },
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       },
       {
        "name": "Urban Center",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:focus_urban')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Urban Center",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:focus_urban')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Urban Center",
        "amount": 1,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:focus_urban')",
        "sourceIcons": null
       }
      ]
     }
    ]
   },
   {
    "name": "Academy",
    "isPlot": false,
    "icon": "url('blp:buildicon_academy')",
    "specialists": null,
    "slots": [
     {
      "name": "Codex",
      "image": "url(\"fs://game/gw_horizontalscroll.png\")",
      "empty": false
     },
     {
      "name": "Codex",
      "image": "url(\"fs://game/gw_horizontalscroll.png\")",
      "empty": false
     },
     {
      "name": "Codex",
      "image": "url(\"fs://game/gw_rotulus.png\")",
      "empty": false
     }
    ],
    "yields": [
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 16,
      "gap": 0,
      "parts": [
       {
        "amount": 6,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 2,
        "term": "Adjacency",
        "kind": "adjacency",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 6,
        "term": "Great Works",
        "kind": "greatWorks",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Likely: Literature or Philosopher's Circle",
        "value": 2,
        "kind": "guess",
        "sourceIcon": null,
        "sourceIcons": [
         "url('blp:icon_policy')",
         "url('blp:bonustype_scientific.png')"
        ],
        "candidates": [
         {
          "name": "Literature",
          "icons": [
           "url('blp:icon_policy')"
          ]
         },
         {
          "name": "Philosopher's Circle",
          "icons": [
           "url('blp:bonustype_scientific.png')"
          ]
         }
        ]
       }
      ],
      "abilities": [
       {
        "name": "Literature",
        "amount": 2,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:icon_policy')",
        "sourceIcons": null
       },
       {
        "name": "Philosopher's Circle",
        "amount": 2,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:bonustype_scientific.png')",
        "sourceIcons": null
       }
      ]
     }
    ]
   },
   {
    "name": "Library",
    "isPlot": false,
    "icon": "url('blp:buildicon_library')",
    "specialists": null,
    "slots": [
     {
      "name": "Codex",
      "image": "url(\"fs://game/gw_horizontalscroll.png\")",
      "empty": false
     },
     {
      "name": "Codex",
      "image": "url(\"fs://game/gw_books.png\")",
      "empty": false
     }
    ],
    "yields": [
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 13,
      "gap": 0,
      "parts": [
       {
        "amount": 5,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 2,
        "term": "Adjacency",
        "kind": "adjacency",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 4,
        "term": "Great Works",
        "kind": "greatWorks",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Likely: Literature or Philosopher's Circle",
        "value": 2,
        "kind": "guess",
        "sourceIcon": null,
        "sourceIcons": [
         "url('blp:icon_policy')",
         "url('blp:bonustype_scientific.png')"
        ],
        "candidates": [
         {
          "name": "Literature",
          "icons": [
           "url('blp:icon_policy')"
          ]
         },
         {
          "name": "Philosopher's Circle",
          "icons": [
           "url('blp:bonustype_scientific.png')"
          ]
         }
        ]
       }
      ],
      "abilities": [
       {
        "name": "Literature",
        "amount": 2,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:icon_policy')",
        "sourceIcons": null
       },
       {
        "name": "Philosopher's Circle",
        "amount": 2,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:bonustype_scientific.png')",
        "sourceIcons": null
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "label": "Capua (46,9)",
  "cityName": "Capua",
  "loc": {
   "x": 46,
   "y": 9
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Fishing Boat",
    "isPlot": false,
    "icon": "url('blp:impicon_fishing')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 1,
        "term": "Warehouse",
        "kind": "warehouse",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Warehouse",
        "kind": "warehouse",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Natural Yield",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Ostia (41,16)",
  "cityName": "Ostia",
  "loc": {
   "x": 41,
   "y": 16
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Base Tile",
    "isPlot": true,
    "icon": null,
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "God of Wisdom",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "God of Wisdom",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null
       },
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Twelve Tables",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Twelve Tables",
        "amount": 1,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null
       }
      ]
     }
    ]
   },
   {
    "name": "Altar",
    "isPlot": false,
    "icon": "url('blp:buildicon_altar')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   },
   {
    "name": "City Hall",
    "isPlot": false,
    "icon": "url('fs://game/buildicon_cityhall')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Economic Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_economic')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Economic Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Gold')",
        "sourceIcon": "url('fs://game/att_economic')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Cultural Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_cultural')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Cultural Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('fs://game/att_cultural')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Ostia (41,17)",
  "cityName": "Ostia",
  "loc": {
   "x": 41,
   "y": 17
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Megalith",
    "isPlot": false,
    "icon": "url('blp:impicon_megalith')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 1,
        "term": "Adjacency",
        "kind": "adjacency",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 1,
        "term": "Warehouse",
        "kind": "warehouse",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Natural Yield",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "amount": 2,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "Appeal Bonus",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Ostia (40,16)",
  "cityName": "Ostia",
  "loc": {
   "x": 40,
   "y": 16
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Base Tile",
    "isPlot": true,
    "icon": null,
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "God of Wisdom",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "God of Wisdom",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null
       },
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       }
      ]
     }
    ]
   },
   {
    "name": "Amphitheater",
    "isPlot": false,
    "icon": "url('blp:buildicon_amphitheater')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "Traditional ancestral histories",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:ntf_choosenarrative')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Traditional ancestral histories",
        "amount": 2,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:ntf_choosenarrative')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 7,
      "gap": 0,
      "parts": [
       {
        "amount": 4,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 1,
        "term": "Adjacency",
        "kind": "adjacency",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Drama and Poetry",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_policy')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Drama and Poetry",
        "amount": 2,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:icon_policy')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "I Know That I Know Nothing",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:victory_cultural')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "I Know That I Know Nothing",
        "amount": 1,
        "icon": "url('blp:Yield_Happiness')",
        "sourceIcon": "url('blp:victory_cultural')",
        "sourceIcons": null
       }
      ]
     }
    ]
   },
   {
    "name": "Monument",
    "isPlot": false,
    "icon": "url('blp:buildicon_monument')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 8,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 1,
        "term": "Adjacency",
        "kind": "adjacency",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Drama and Poetry",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_policy')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Cursus Honorum",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Drama and Poetry",
        "amount": 2,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:icon_policy')",
        "sourceIcons": null
       },
       {
        "name": "Cursus Honorum",
        "amount": 2,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "I Know That I Know Nothing",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:victory_cultural')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "I Know That I Know Nothing",
        "amount": 1,
        "icon": "url('blp:Yield_Happiness')",
        "sourceIcon": "url('blp:victory_cultural')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_DIPLOMACY",
      "name": "Influence",
      "icon": "url('blp:yield_influence')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "amount": 2,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Ostia (41,15)",
  "cityName": "Ostia",
  "loc": {
   "x": 41,
   "y": 15
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Festival Grounds",
    "isPlot": false,
    "icon": "url('blp:impicon_festivalgrounds')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 1,
        "term": "Warehouse",
        "kind": "warehouse",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Natural Yield",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Appeal Bonus",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_DIPLOMACY",
      "name": "Influence",
      "icon": "url('blp:yield_influence')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Ostia (42,16)",
  "cityName": "Ostia",
  "loc": {
   "x": 42,
   "y": 16
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Granary",
    "isPlot": false,
    "icon": "url('blp:buildicon_granary')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Ostia (41,18)",
  "cityName": "Ostia",
  "loc": {
   "x": 41,
   "y": 18
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Fishing Boat",
    "isPlot": false,
    "icon": "url('blp:impicon_fishing')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 1,
        "term": "Warehouse",
        "kind": "warehouse",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Warehouse",
        "kind": "warehouse",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Natural Yield",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Ostia (40,18)",
  "cityName": "Ostia",
  "loc": {
   "x": 40,
   "y": 18
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Fishing Boat",
    "isPlot": false,
    "icon": "url('blp:impicon_fishing')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 1,
        "term": "Warehouse",
        "kind": "warehouse",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "From Resources",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Warehouse",
        "kind": "warehouse",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Natural Yield",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Ostia (39,18)",
  "cityName": "Ostia",
  "loc": {
   "x": 39,
   "y": 18
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Base Tile",
    "isPlot": true,
    "icon": null,
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "God of Wisdom",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "God of Wisdom",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null
       },
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       }
      ]
     }
    ]
   },
   {
    "name": "Brickyard",
    "isPlot": false,
    "icon": "url('blp:buildicon_brickyard')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   },
   {
    "name": "Saw Pit",
    "isPlot": false,
    "icon": "url('blp:buildicon_sawpit')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Ostia (39,17)",
  "cityName": "Ostia",
  "loc": {
   "x": 39,
   "y": 17
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Base Tile",
    "isPlot": true,
    "icon": null,
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "God of Wisdom",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "God of Wisdom",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null
       },
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       }
      ]
     }
    ]
   },
   {
    "name": "Academy",
    "isPlot": false,
    "icon": "url('blp:buildicon_academy')",
    "specialists": null,
    "slots": [
     {
      "name": null,
      "image": null,
      "empty": true
     },
     {
      "name": null,
      "image": null,
      "empty": true
     },
     {
      "name": null,
      "image": null,
      "empty": true
     }
    ],
    "yields": [
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 9,
      "gap": 0,
      "parts": [
       {
        "amount": 6,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 1,
        "term": "Adjacency",
        "kind": "adjacency",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Likely: Literature or Philosopher's Circle",
        "value": 2,
        "kind": "guess",
        "sourceIcon": null,
        "sourceIcons": [
         "url('blp:icon_policy')",
         "url('blp:bonustype_scientific.png')"
        ],
        "candidates": [
         {
          "name": "Literature",
          "icons": [
           "url('blp:icon_policy')"
          ]
         },
         {
          "name": "Philosopher's Circle",
          "icons": [
           "url('blp:bonustype_scientific.png')"
          ]
         }
        ]
       }
      ],
      "abilities": [
       {
        "name": "Literature",
        "amount": 2,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:icon_policy')",
        "sourceIcons": null
       },
       {
        "name": "Philosopher's Circle",
        "amount": 2,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:bonustype_scientific.png')",
        "sourceIcons": null
       }
      ]
     }
    ]
   },
   {
    "name": "Library",
    "isPlot": false,
    "icon": "url('blp:buildicon_library')",
    "specialists": null,
    "slots": [
     {
      "name": "Codex",
      "image": "url(\"fs://game/gw_horizontalscroll.png\")",
      "empty": false
     },
     {
      "name": "Codex",
      "image": "url(\"fs://game/gw_tablet2.png\")",
      "empty": false
     }
    ],
    "yields": [
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 12,
      "gap": 0,
      "parts": [
       {
        "amount": 5,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 1,
        "term": "Adjacency",
        "kind": "adjacency",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 4,
        "term": "Great Works",
        "kind": "greatWorks",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Likely: Literature or Philosopher's Circle",
        "value": 2,
        "kind": "guess",
        "sourceIcon": null,
        "sourceIcons": [
         "url('blp:icon_policy')",
         "url('blp:bonustype_scientific.png')"
        ],
        "candidates": [
         {
          "name": "Literature",
          "icons": [
           "url('blp:icon_policy')"
          ]
         },
         {
          "name": "Philosopher's Circle",
          "icons": [
           "url('blp:bonustype_scientific.png')"
          ]
         }
        ]
       }
      ],
      "abilities": [
       {
        "name": "Literature",
        "amount": 2,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:icon_policy')",
        "sourceIcons": null
       },
       {
        "name": "Philosopher's Circle",
        "amount": 2,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:bonustype_scientific.png')",
        "sourceIcons": null
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "label": "Ostia (39,19)",
  "cityName": "Ostia",
  "loc": {
   "x": 39,
   "y": 19
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Base Tile",
    "isPlot": true,
    "icon": null,
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "God of Wisdom",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "God of Wisdom",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null
       },
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       }
      ]
     }
    ]
   },
   {
    "name": "Fishing Quay",
    "isPlot": false,
    "icon": "url('blp:buildicon_fishingquay')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   },
   {
    "name": "Harbor",
    "isPlot": false,
    "icon": "url('blp:buildicon_harbor')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Ostia (39,15)",
  "cityName": "Ostia",
  "loc": {
   "x": 39,
   "y": 15
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Plantation",
    "isPlot": false,
    "icon": "url('blp:impicon_plant')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 4,
      "gap": 0,
      "parts": [
       {
        "amount": 2,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 1,
        "term": "Warehouse",
        "kind": "warehouse",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Environment Effects Bonus",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Natural Yield",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "From Resources",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Appeal Bonus",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Patavium (34,11)",
  "cityName": "Patavium",
  "loc": {
   "x": 34,
   "y": 11
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Base Tile",
    "isPlot": true,
    "icon": null,
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Resort Town",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:focus_resort')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Resort Town",
        "amount": 1,
        "icon": "url('blp:Yield_Gold')",
        "sourceIcon": "url('blp:focus_resort')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "God of Wisdom",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "God of Wisdom",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null
       },
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Twelve Tables",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Twelve Tables",
        "amount": 1,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Resort Town",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:focus_resort')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Resort Town",
        "amount": 1,
        "icon": "url('blp:Yield_Happiness')",
        "sourceIcon": "url('blp:focus_resort')",
        "sourceIcons": null
       }
      ]
     }
    ]
   },
   {
    "name": "Altar",
    "isPlot": false,
    "icon": "url('blp:buildicon_altar')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   },
   {
    "name": "City Hall",
    "isPlot": false,
    "icon": "url('fs://game/buildicon_cityhall')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Economic Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_economic')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Economic Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Gold')",
        "sourceIcon": "url('fs://game/att_economic')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Cultural Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_cultural')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Cultural Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('fs://game/att_cultural')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Patavium (35,12)",
  "cityName": "Patavium",
  "loc": {
   "x": 35,
   "y": 12
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Expedition Base",
    "isPlot": false,
    "icon": "url('blp:impicon_expeditionbase')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 2,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Resort Town (+50%)",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 1.5,
      "gap": 0,
      "parts": [
       {
        "label": "Resort Town",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Resort Town (+50%)",
        "value": 0.5,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 2,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Resort Town (+50%)",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 4.5,
      "gap": 0,
      "parts": [
       {
        "amount": 2,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Resort Town",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Resort Town (+50%)",
        "value": 1.5,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Patavium (34,10)",
  "cityName": "Patavium",
  "loc": {
   "x": 34,
   "y": 10
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Base Tile",
    "isPlot": true,
    "icon": null,
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "God of Wisdom",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "God of Wisdom",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null
       },
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       }
      ]
     }
    ]
   },
   {
    "name": "Fishing Quay",
    "isPlot": false,
    "icon": "url('blp:buildicon_fishingquay')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   },
   {
    "name": "Harbor",
    "isPlot": false,
    "icon": "url('blp:buildicon_harbor')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Patavium (35,11)",
  "cityName": "Patavium",
  "loc": {
   "x": 35,
   "y": 11
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Base Tile",
    "isPlot": true,
    "icon": null,
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Resort Town",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:focus_resort')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Resort Town",
        "amount": 1,
        "icon": "url('blp:Yield_Gold')",
        "sourceIcon": "url('blp:focus_resort')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "God of Wisdom",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "God of Wisdom",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null
       },
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Resort Town",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:focus_resort')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Resort Town",
        "amount": 1,
        "icon": "url('blp:Yield_Happiness')",
        "sourceIcon": "url('blp:focus_resort')",
        "sourceIcons": null
       }
      ]
     }
    ]
   },
   {
    "name": "Amphitheater",
    "isPlot": false,
    "icon": "url('blp:buildicon_amphitheater')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "Traditional ancestral histories",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:ntf_choosenarrative')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Traditional ancestral histories",
        "amount": 2,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:ntf_choosenarrative')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 8,
      "gap": 0,
      "parts": [
       {
        "amount": 4,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 2,
        "term": "Adjacency",
        "kind": "adjacency",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Drama and Poetry",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_policy')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Drama and Poetry",
        "amount": 2,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:icon_policy')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "I Know That I Know Nothing",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:victory_cultural')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "I Know That I Know Nothing",
        "amount": 1,
        "icon": "url('blp:Yield_Happiness')",
        "sourceIcon": "url('blp:victory_cultural')",
        "sourceIcons": null
       }
      ]
     }
    ]
   },
   {
    "name": "Monument",
    "isPlot": false,
    "icon": "url('blp:buildicon_monument')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 9,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 2,
        "term": "Adjacency",
        "kind": "adjacency",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Drama and Poetry",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_policy')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Cursus Honorum",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Drama and Poetry",
        "amount": 2,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:icon_policy')",
        "sourceIcons": null
       },
       {
        "name": "Cursus Honorum",
        "amount": 2,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "I Know That I Know Nothing",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:victory_cultural')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "I Know That I Know Nothing",
        "amount": 1,
        "icon": "url('blp:Yield_Happiness')",
        "sourceIcon": "url('blp:victory_cultural')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_DIPLOMACY",
      "name": "Influence",
      "icon": "url('blp:yield_influence')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "amount": 2,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Patavium (35,13)",
  "cityName": "Patavium",
  "loc": {
   "x": 35,
   "y": 13
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Expedition Base",
    "isPlot": false,
    "icon": "url('blp:impicon_expeditionbase')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 2,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Resort Town (+50%)",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 1.5,
      "gap": 0,
      "parts": [
       {
        "label": "Resort Town",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Resort Town (+50%)",
        "value": 0.5,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 2,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Resort Town (+50%)",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 4.5,
      "gap": 0,
      "parts": [
       {
        "amount": 2,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Resort Town",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Resort Town (+50%)",
        "value": 1.5,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Aquileia (38,9)",
  "cityName": "Aquileia",
  "loc": {
   "x": 38,
   "y": 9
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Base Tile",
    "isPlot": true,
    "icon": null,
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "God of Wisdom",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "God of Wisdom",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null
       },
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Twelve Tables",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Twelve Tables",
        "amount": 1,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:civ_sym_rome')",
        "sourceIcons": null
       }
      ]
     }
    ]
   },
   {
    "name": "Altar",
    "isPlot": false,
    "icon": "url('blp:buildicon_altar')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   },
   {
    "name": "City Hall",
    "isPlot": false,
    "icon": "url('fs://game/buildicon_cityhall')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Economic Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_economic')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Economic Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Gold')",
        "sourceIcon": "url('fs://game/att_economic')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Cultural Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_cultural')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Cultural Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('fs://game/att_cultural')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Aquileia (37,9)",
  "cityName": "Aquileia",
  "loc": {
   "x": 37,
   "y": 9
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Base Tile",
    "isPlot": true,
    "icon": null,
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "God of Wisdom",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "God of Wisdom",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null
       },
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       }
      ]
     }
    ]
   },
   {
    "name": "Fishing Quay",
    "isPlot": false,
    "icon": "url('blp:buildicon_fishingquay')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   },
   {
    "name": "Harbor",
    "isPlot": false,
    "icon": "url('blp:buildicon_harbor')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Aquileia (39,8)",
  "cityName": "Aquileia",
  "loc": {
   "x": 39,
   "y": 8
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Base Tile",
    "isPlot": true,
    "icon": null,
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "God of Wisdom",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Scientific Attribute Skills",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "God of Wisdom",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:pant_wisdom')",
        "sourceIcons": null
       },
       {
        "name": "Scientific Attribute Skills",
        "amount": 1,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('fs://game/att_scientific')",
        "sourceIcons": null
       }
      ]
     }
    ]
   },
   {
    "name": "Amphitheater",
    "isPlot": false,
    "icon": "url('blp:buildicon_amphitheater')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_SCIENCE",
      "name": "Science",
      "icon": "url('blp:Yield_Science')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "label": "Traditional ancestral histories",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:ntf_choosenarrative')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Traditional ancestral histories",
        "amount": 2,
        "icon": "url('blp:Yield_Science')",
        "sourceIcon": "url('blp:ntf_choosenarrative')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 6,
      "gap": 0,
      "parts": [
       {
        "amount": 4,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Drama and Poetry",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_policy')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Drama and Poetry",
        "amount": 2,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:icon_policy')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "I Know That I Know Nothing",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:victory_cultural')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "I Know That I Know Nothing",
        "amount": 1,
        "icon": "url('blp:Yield_Happiness')",
        "sourceIcon": "url('blp:victory_cultural')",
        "sourceIcons": null
       }
      ]
     }
    ]
   },
   {
    "name": "Monument",
    "isPlot": false,
    "icon": "url('blp:buildicon_monument')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 7,
      "gap": 0,
      "parts": [
       {
        "amount": 3,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Drama and Poetry",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_policy')",
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Cursus Honorum",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "Drama and Poetry",
        "amount": 2,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:icon_policy')",
        "sourceIcons": null
       },
       {
        "name": "Cursus Honorum",
        "amount": 2,
        "icon": "url('blp:Yield_Culture')",
        "sourceIcon": "url('blp:icon_tradition')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_HAPPINESS",
      "name": "Happiness",
      "icon": "url('blp:Yield_Happiness')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "I Know That I Know Nothing",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": "url('blp:victory_cultural')",
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": [
       {
        "name": "I Know That I Know Nothing",
        "amount": 1,
        "icon": "url('blp:Yield_Happiness')",
        "sourceIcon": "url('blp:victory_cultural')",
        "sourceIcons": null
       }
      ]
     },
     {
      "type": "YIELD_DIPLOMACY",
      "name": "Influence",
      "icon": "url('blp:yield_influence')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "amount": 2,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Aquileia (38,8)",
  "cityName": "Aquileia",
  "loc": {
   "x": 38,
   "y": 8
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Fishing Boat",
    "isPlot": false,
    "icon": "url('blp:impicon_fishing')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 3,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "amount": 1,
        "term": "Warehouse",
        "kind": "warehouse",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "From Resources",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Warehouse",
        "kind": "warehouse",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Natural Yield",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Aquileia (39,9)",
  "cityName": "Aquileia",
  "loc": {
   "x": 39,
   "y": 9
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Hillfort",
    "isPlot": false,
    "icon": "url('blp:impicon_hillfort')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 4,
      "gap": 0,
      "parts": [
       {
        "amount": 2,
        "term": "Base Yield",
        "kind": "base",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Natural Yield",
        "value": 2,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 },
 {
  "label": "Aquileia (37,10)",
  "cityName": "Aquileia",
  "loc": {
   "x": 37,
   "y": 10
  },
  "emptyMessage": "Nothing on this tile is producing a yield the city accounts for.",
  "groups": [
   {
    "name": "Fishing Boat",
    "isPlot": false,
    "icon": "url('blp:impicon_fishing')",
    "specialists": null,
    "slots": [],
    "yields": [
     {
      "type": "YIELD_FOOD",
      "name": "Food",
      "icon": "url('blp:Yield_Food')",
      "total": 2,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Warehouse",
        "kind": "warehouse",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       },
       {
        "label": "Natural Yield",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_PRODUCTION",
      "name": "Production",
      "icon": "url('blp:Yield_Production')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "amount": 1,
        "term": "Warehouse",
        "kind": "warehouse",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_GOLD",
      "name": "Gold",
      "icon": "url('blp:Yield_Gold')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "Natural Yield",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     },
     {
      "type": "YIELD_CULTURE",
      "name": "Culture",
      "icon": "url('blp:Yield_Culture')",
      "total": 1,
      "gap": 0,
      "parts": [
       {
        "label": "From Resources",
        "value": 1,
        "kind": "bonus",
        "sourceIcon": null,
        "sourceIcons": null,
        "candidates": null
       }
      ],
      "abilities": []
     }
    ]
   }
  ]
 }
];
