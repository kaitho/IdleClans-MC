const SKILL_TYPES = Object.freeze({
  Processing: Object.freeze(["Brewing", "Carpentry", "Cooking", "Crafting", "Smithing"])
});

const RECIPES = Object.freeze({
  "Potion of Swiftness": {
    skill: "Brewing",
    output: 1,
    ingredients: {
      Tomato: 10,
      Nettle: 5,
      "Pine Log": 2
    }
  },
  "Potion of Negotiation": {
    skill: "Brewing",
    output: 1,
    ingredients: {
      Tomato: 10,
      "Magical Flax": 15,
      "Oak Log": 2
    }
  },
  "Potion of Resurrection": {
    skill: "Brewing",
    output: 1,
    ingredients: {
      Cabbage: 15,
      "Enchanted Flax": 10,
      "Chestnut Log": 2
    }
  },
  "Potion of Forgery": {
    skill: "Brewing",
    output: 1,
    ingredients: {
      Strawberry: 10,
      "Enchanted Flax": 15,
      "Mahogany Log": 2
    }
  },
  "Potion of Great Sight": {
    skill: "Brewing",
    output: 1,
    ingredients: {
      Watermelon: 10,
      "Magical Flax": 15,
      "Teak Log": 2
    }
  },
  "Potion of Trickery": {
    skill: "Brewing",
    output: 1,
    ingredients: {
      Grapes: 10,
      Porcini: 15,
      "Yew Log": 2
    }
  },
  "Potion of Dark Magic": {
    skill: "Brewing",
    output: 1,
    ingredients: {
      Papaya: 10,
      "Cursed Flax": 15,
      "Redwood Log": 2
    }
  },
  "Potion of Pure Power": {
    skill: "Brewing",
    output: 1,
    ingredients: {
      Papaya: 15,
      Seaweed: 20,
      "Magical Log": 2
    }
  },
  "Potion of Ancient Knowledge": {
    skill: "Brewing",
    output: 1,
    ingredients: {
      "Dragon Fruit": 20,
      Seaweed: 50,
      "Magical Log": 10
    }
  },
  "Dragonfire Potion": {
    skill: "Brewing",
    output: 1,
    ingredients: {
      "Sunfire Berry": 10,
      "Smoldering Mushroom": 30,
      "Ignis Heartwood": 5,
      "Otherworldly Essence": 100
    }
  },
  "Potion of Ascension": {
    skill: "Brewing",
    output: 1,
    ingredients: {
      "Divine Ashes": 10,
      "Obsidian Powder": 30,
      "Sea Serpent Scale": 30,
      "Spirit Salt": 50
    }
  },
  "Spruce Plank": {
    skill: "Carpentry",
    output: 1,
    ingredients: {
      "Spruce Log": 1,
      Gold: 50
    }
  },
  "Pine Plank": {
    skill: "Carpentry",
    output: 1,
    ingredients: {
      "Pine Log": 1,
      Gold: 60
    }
  },
  "Oak Plank": {
    skill: "Carpentry",
    output: 1,
    ingredients: {
      "Oak Log": 1,
      Gold: 70
    }
  },
  "Maple Plank": {
    skill: "Carpentry",
    output: 1,
    ingredients: {
      "Maple Log": 1,
      Gold: 80
    }
  },
  "Teak Plank": {
    skill: "Carpentry",
    output: 1,
    ingredients: {
      "Teak Log": 1,
      Gold: 90
    }
  },
  "Chestnut Plank": {
    skill: "Carpentry",
    output: 1,
    ingredients: {
      "Chestnut Log": 1,
      Gold: 100
    }
  },
  "Mahogany Plank": {
    skill: "Carpentry",
    output: 1,
    ingredients: {
      "Mahogany Log": 1,
      Gold: 110
    }
  },
  "Yew Plank": {
    skill: "Carpentry",
    output: 1,
    ingredients: {
      "Yew Log": 1,
      Gold: 125
    }
  },
  "Redwood Plank": {
    skill: "Carpentry",
    output: 1,
    ingredients: {
      "Redwood Log": 1,
      Gold: 150
    }
  },
  "Magical Plank": {
    skill: "Carpentry",
    output: 1,
    ingredients: {
      "Magical Log": 1,
      Gold: 175
    }
  },
  "Ignis Heartwood": {
    skill: "Carpentry",
    output: 1,
    ingredients: {
      "Ignis Log": 1,
      Gold: 375
    }
  },
  "Cooked Piranha": {
    skill: "Cooking",
    output: 1,
    ingredients: {
      "Raw Piranha": 1
    }
  },
  "Cooked Perch": {
    skill: "Cooking",
    output: 1,
    ingredients: {
      "Raw Perch": 1
    }
  },
  "Cooked Mackerel": {
    skill: "Cooking",
    output: 1,
    ingredients: {
      "Raw Mackerel": 1
    }
  },
  "Cooked Cod": {
    skill: "Cooking",
    output: 1,
    ingredients: {
      "Raw Cod": 1
    }
  },
  "Cooked Trout": {
    skill: "Cooking",
    output: 1,
    ingredients: {
      "Raw Trout": 1
    }
  },
  "Cooked Salmon": {
    skill: "Cooking",
    output: 1,
    ingredients: {
      "Raw Salmon": 1
    }
  },
  "Cooked Carp": {
    skill: "Cooking",
    output: 1,
    ingredients: {
      "Raw Carp": 1
    }
  },
  "Cooked Zander": {
    skill: "Cooking",
    output: 1,
    ingredients: {
      "Raw Zander": 1
    }
  },
  "Cooked Pufferfish": {
    skill: "Cooking",
    output: 1,
    ingredients: {
      "Raw Pufferfish": 1
    }
  },
  "Cooked Anglerfish": {
    skill: "Cooking",
    output: 1,
    ingredients: {
      "Raw Anglerfish": 1
    }
  },
  "Cooked Tuna": {
    skill: "Cooking",
    output: 1,
    ingredients: {
      "Raw Tuna": 1
    }
  },
  "Cooked Bloodmoon Eel": {
    skill: "Cooking",
    output: 1,
    ingredients: {
      "Bloodmoon Eel": 1
    }
  },
  "Cooked Sea Serpent": {
    skill: "Cooking",
    output: 1,
    ingredients: {
      "Raw Sea Serpent": 1
    }
  },
  "Cooked Meat": {
    skill: "Cooking",
    output: 1,
    ingredients: {
      "Raw Meat": 1
    }
  },
  "Cooked Giant Meat": {
    skill: "Cooking",
    output: 1,
    ingredients: {
      "Raw Giant Meat": 1
    }
  },
  "Cooked Quality Meat": {
    skill: "Cooking",
    output: 1,
    ingredients: {
      "Raw Quality Meat": 1
    }
  },
  "Cooked Superior Meat": {
    skill: "Cooking",
    output: 1,
    ingredients: {
      "Raw Superior Meat": 1
    }
  },
  "Apex Meat": {
    skill: "Cooking",
    output: 1,
    ingredients: {
      "Raw Apex Meat": 1
    }
  },
  "Potato Soup": {
    skill: "Cooking",
    output: 1,
    ingredients: {
      Potato: 3
    }
  },
  "Meat Burger": {
    skill: "Cooking",
    output: 1,
    ingredients: {
      "Cooked Meat": 2,
      Onion: 1
    }
  },
  "Cod Soup": {
    skill: "Cooking",
    output: 1,
    ingredients: {
      "Cooked Cod": 2,
      Potato: 3,
      Onion: 1
    }
  },
  "Blueberry Pie": {
    skill: "Cooking",
    output: 1,
    ingredients: {
      Blueberry: 10,
      Onion: 1
    }
  },
  "Salmon Salad": {
    skill: "Cooking",
    output: 1,
    ingredients: {
      "Cooked Salmon": 2,
      Potato: 3,
      Onion: 1
    }
  },
  "Porcini Soup": {
    skill: "Cooking",
    output: 1,
    ingredients: {
      Porcini: 5,
      Potato: 4,
      Onion: 2
    }
  },
  "Beef Stew": {
    skill: "Cooking",
    output: 1,
    ingredients: {
      Potato: 4,
      Carrot: 4,
      "Cooked Quality Meat": 1
    }
  },
  "Power Pizza": {
    skill: "Cooking",
    output: 1,
    ingredients: {
      "Cooked Zander": 3,
      "Cooked Pufferfish": 1,
      "Cooked Quality Meat": 2,
      Onion: 1
    }
  },
  "Refined Gemstone": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      Gemstone: 1
    }
  },
  "Great Gemstone": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Refined Gemstone": 1
    }
  },
  "Elite Gemstone": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Great Gemstone": 1
    }
  },
  "Superior Gemstone": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Elite Gemstone": 1
    }
  },
  "Outstanding Gemstone": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Superior Gemstone": 1
    }
  },
  "Godlike Gemstone": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Outstanding Gemstone": 1
    }
  },
  "Otherworldly Gemstone": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Godlike Gemstone": 3
    }
  },
  "Leather Coat": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      Leather: 3
    }
  },
  "Orange Coat": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Orange Leather": 20
    }
  },
  "Green Coat": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Green Leather": 40
    }
  },
  "Red Coat": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Red Leather": 60
    }
  },
  "Black Coat": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Black Leather": 80
    }
  },
  "Basilisk Scale Coat": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Basilisk Scale": 3,
      "Black Coat": 1
    }
  },
  "Astronomical Leather Coat": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Astronomical Leather": 6
    }
  },
  "Otherworldly Leather Coat": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Otherworldly Leather": 6,
      "Astronomical Leather Coat": 1
    }
  },
  "Leather Trousers": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      Leather: 2
    }
  },
  "Orange Trousers": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Orange Leather": 20
    }
  },
  "Green Trousers": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Green Leather": 40
    }
  },
  "Red Trousers": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Red Leather": 60
    }
  },
  "Black Trousers": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Black Leather": 80
    }
  },
  "Basilisk Scale Trousers": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Basilisk Scale": 2,
      "Black Trousers": 1
    }
  },
  "Astronomical Leather Trousers": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Astronomical Leather": 4
    }
  },
  "Otherworldly Leather Trousers": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Otherworldly Leather": 4,
      "Astronomical Leather Trousers": 1
    }
  },
  "Magical Robe": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Magical Flax": 15
    }
  },
  "Enchanted Robe": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Enchanted Flax": 40
    }
  },
  "Cursed Robe": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Cursed Flax": 70
    }
  },
  "Astronomical Robe": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Astronomical Flax": 6
    }
  },
  "Magical Trousers": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Magical Flax": 10
    }
  },
  "Enchanted Trousers": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Enchanted Flax": 40
    }
  },
  "Cursed Trousers": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Cursed Flax": 70
    }
  },
  "Astronomical Trousers": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Astronomical Flax": 4
    }
  },
  "Obsidian Powder": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Tempered Obsidian": 1
    }
  },
  "Sea Serpent Scale": {
    skill: "Crafting",
    output: 1,
    ingredients: {
      "Raw Sea Serpent": 1
    }
  },
  "Bronze Bar": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Tin Ore": 1,
      "Copper Ore": 1
    }
  },
  "Iron Bar": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Iron Ore": 1
    }
  },
  "Silver Bar": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Silver Ore": 1
    }
  },
  "Steel Bar": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Coal Ore": 1,
      "Iron Ore": 2
    }
  },
  "Gold Bar": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Gold Ore": 1
    }
  },
  "Platinum Bar": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Coal Ore": 3,
      "Platinum Ore": 1
    }
  },
  "Meteorite Bar": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Coal Ore": 6,
      "Meteorite Ore": 3
    }
  },
  "Diamond Bar": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Diamond Ore": 1
    }
  },
  "Titanium Bar": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Coal Ore": 9,
      "Titanium Ore": 3
    }
  },
  "Astronomical Bar": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Coal Ore": 5000,
      "Astronomical Ore": 1
    }
  },
  "Otherworldly Bar": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Otherworldly Ore": 1,
      "Astronomical Ore": 2,
      "Meteorite Ore": 10000,
      "Titanium Ore": 5000
    }
  },
  "Bronze Platebody": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Bronze Bar": 6
    }
  },
  "Bronze Platelegs": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Bronze Bar": 4
    }
  },
  "Bronze Helmet": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Bronze Bar": 2
    }
  },
  "Bronze Shield": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Bronze Bar": 4
    }
  },
  "Iron Platebody": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Iron Bar": 6
    }
  },
  "Iron Platelegs": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Iron Bar": 4
    }
  },
  "Iron Helmet": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Iron Bar": 2
    }
  },
  "Iron Shield": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Iron Bar": 4
    }
  },
  "Steel Platebody": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Steel Bar": 6
    }
  },
  "Steel Platelegs": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Steel Bar": 4
    }
  },
  "Steel Helmet": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Steel Bar": 2
    }
  },
  "Steel Shield": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Steel Bar": 4
    }
  },
  "Platinum Platebody": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Platinum Bar": 6
    }
  },
  "Platinum Platelegs": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Platinum Bar": 4
    }
  },
  "Platinum Helmet": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Platinum Bar": 2
    }
  },
  "Platinum Shield": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Platinum Bar": 4
    }
  },
  "Meteorite Platebody": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Meteorite Bar": 6
    }
  },
  "Meteorite Platelegs": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Meteorite Bar": 4
    }
  },
  "Meteorite Helmet": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Meteorite Bar": 2
    }
  },
  "Meteorite Shield": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Meteorite Bar": 4
    }
  },
  "Titanium Platebody": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Titanium Bar": 6
    }
  },
  "Titanium Platelegs": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Titanium Bar": 4
    }
  },
  "Titanium Helmet": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Titanium Bar": 2
    }
  },
  "Titanium Shield": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Titanium Bar": 4
    }
  },
  "Astronomical Platebody": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Astronomical Bar": 6
    }
  },
  "Astronomical Platelegs": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Astronomical Bar": 4
    }
  },
  "Astronomical Helmet": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Astronomical Bar": 2
    }
  },
  "Astronomical Shield": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Astronomical Bar": 4
    }
  },
  "Otherworldly Platebody": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Otherworldly Bar": 6,
      "Astronomical Platebody": 1
    }
  },
  "Otherworldly Platelegs": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Otherworldly Bar": 4,
      "Astronomical Platelegs": 1
    }
  },
  "Otherworldly Helmet": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Otherworldly Bar": 2,
      "Astronomical Helmet": 1
    }
  },
  "Otherworldly Shield": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Otherworldly Bar": 4,
      "Astronomical Shield": 1
    }
  },
  "Silver Amulet": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Silver Bar": 2
    }
  },
  "Silver Ring": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Silver Bar": 2
    }
  },
  "Silver Bracelet": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Silver Bar": 2
    }
  },
  "Silver Earrings": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Silver Bar": 2
    }
  },
  "Gold Amulet": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Gold Bar": 2
    }
  },
  "Gold Ring": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Gold Bar": 2
    }
  },
  "Gold Bracelet": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Gold Bar": 2
    }
  },
  "Gold Earrings": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Gold Bar": 2
    }
  },
  "Diamond Amulet": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Diamond Bar": 2
    }
  },
  "Diamond Ring": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Diamond Bar": 2
    }
  },
  "Diamond Bracelet": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Diamond Bar": 2
    }
  },
  "Diamond Earrings": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Diamond Bar": 2
    }
  },
  "Silver Precision Ring": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Silver Ring": 1
    }
  },
  "Silver Berserker Ring": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Silver Ring": 1
    }
  },
  "Silver Arcane Ring": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Silver Ring": 1
    }
  },
  "Silver Marksman Bracelet": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Silver Bracelet": 1
    }
  },
  "Silver Brute Bracelet": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Silver Bracelet": 1
    }
  },
  "Silver Sorcerer Bracelet": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Silver Bracelet": 1
    }
  },
  "Gold Precision Ring": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Gold Ring": 1
    }
  },
  "Gold Berserker Ring": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Gold Ring": 1
    }
  },
  "Gold Arcane Ring": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Gold Ring": 1
    }
  },
  "Gold Marksman Bracelet": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Gold Bracelet": 1
    }
  },
  "Gold Brute Bracelet": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Gold Bracelet": 1
    }
  },
  "Gold Sorcerer Bracelet": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Gold Bracelet": 1
    }
  },
  "Diamond Precision Ring": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Diamond Ring": 1
    }
  },
  "Diamond Berserker Ring": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Diamond Ring": 1
    }
  },
  "Diamond Arcane Ring": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Diamond Ring": 1
    }
  },
  "Diamond Marksman Bracelet": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Diamond Bracelet": 1
    }
  },
  "Diamond Brute Bracelet": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Diamond Bracelet": 1
    }
  },
  "Diamond Sorcerer Bracelet": {
    skill: "Smithing",
    output: 1,
    ingredients: {
      "Diamond Bracelet": 1
    }
  }
});

const formatter = new Intl.NumberFormat();
const recipeEntries = Object.entries(RECIPES);
const skillMetadata = buildSkillMetadata();
const recipesBySkill = buildRecipesBySkill(recipeEntries);
const skillList = buildSkillList(recipesBySkill);
const craftableItems = recipeEntries
  .map(([item]) => item)
  .sort(compareItems);

const targetsContainer = document.querySelector("#targets");
const statusEl = document.querySelector("#status");
const categoriesListEl = document.querySelector("#categories-list");
const categoriesEmpty = document.querySelector("#categories-empty");
const totalsTable = document.querySelector("#totals-table");
const totalsBody = document.querySelector("#totals-body");
const totalsEmpty = document.querySelector("#totals-empty");
const breakdownContainer = document.querySelector("#breakdown");
const breakdownEmpty = document.querySelector("#breakdown-empty");
const targetRowTemplate = document.querySelector("#target-row-template");
const addTargetButton = document.querySelector("#add-target");
const calculateButton = document.querySelector("#calculate");

function buildSkillMetadata() {
  const skillTypeOrder = Object.keys(SKILL_TYPES);
  const skillPriority = new Map();
  const skillTypeBySkill = new Map();

  skillTypeOrder.forEach((type, typeIndex) => {
    SKILL_TYPES[type].forEach((skill, indexInType) => {
      if (!skillPriority.has(skill)) {
        skillPriority.set(skill, typeIndex * 100 + indexInType);
      }
      if (!skillTypeBySkill.has(skill)) {
        skillTypeBySkill.set(skill, type);
      }
    });
  });

  return { skillTypeOrder, skillPriority, skillTypeBySkill };
}

function compareSkills(left, right) {
  const leftRank = skillMetadata.skillPriority.has(left) ? skillMetadata.skillPriority.get(left) : Number.MAX_SAFE_INTEGER;
  const rightRank = skillMetadata.skillPriority.has(right) ? skillMetadata.skillPriority.get(right) : Number.MAX_SAFE_INTEGER;

  if (leftRank !== rightRank) {
    return leftRank - rightRank;
  }

  return left.localeCompare(right);
}

function buildRecipesBySkill(entries) {
  const grouped = new Map();

  entries.forEach(([itemName, recipe]) => {
    const skill = recipe.skill || "Unmapped";
    if (!grouped.has(skill)) {
      grouped.set(skill, []);
    }
    grouped.get(skill).push(itemName);
  });

  grouped.forEach((items) => items.sort((a, b) => a.localeCompare(b)));
  return grouped;
}

function buildSkillList(grouped) {
  const configuredSkills = skillMetadata.skillTypeOrder.flatMap((type) => SKILL_TYPES[type]);
  const discoveredSkills = [...grouped.keys()];
  const merged = [...new Set([...configuredSkills, ...discoveredSkills])];
  return merged.sort(compareSkills);
}

function getItemSkill(itemName) {
  return RECIPES[itemName]?.skill || "Unmapped";
}

function compareItems(left, right) {
  const skillSort = compareSkills(getItemSkill(left), getItemSkill(right));
  if (skillSort !== 0) {
    return skillSort;
  }
  return left.localeCompare(right);
}

function matchesSearchQuery(itemName, searchQuery) {
  return itemName.toLowerCase().includes(searchQuery);
}

function getSkillType(skill) {
  return skillMetadata.skillTypeBySkill.get(skill) || "Unmapped";
}

function setStatus(message, isError = false) {
  statusEl.textContent = message;
  statusEl.classList.toggle("error", isError);
}

function clearStatus() {
  setStatus("");
}

function formatAmount(value) {
  return formatter.format(value);
}

function renderSkillSummary() {
  categoriesListEl.innerHTML = "";

  if (!skillList.length) {
    categoriesEmpty.hidden = false;
    return;
  }

  skillList.forEach((skill) => {
    const recipeCount = (recipesBySkill.get(skill) || []).length;
    const type = getSkillType(skill);

    const item = document.createElement("li");
    const name = document.createElement("span");
    const count = document.createElement("span");

    item.className = "category-chip";
    name.textContent = `${skill} (${type})`;
    count.className = "count";
    count.textContent = `${formatAmount(recipeCount)} recipe${recipeCount === 1 ? "" : "s"}`;

    item.append(name, count);
    categoriesListEl.append(item);
  });

  categoriesEmpty.hidden = true;
}

function populateItemSelect(select, selectedValue = craftableItems[0], rawSearchQuery = "") {
  select.innerHTML = "";
  const searchQuery = rawSearchQuery.trim().toLowerCase();
  let hasMatchingItems = false;

  skillList.forEach((skill) => {
    const items = recipesBySkill.get(skill) || [];
    const filteredItems = searchQuery
      ? items.filter((itemName) => matchesSearchQuery(itemName, searchQuery))
      : items;

    if (!filteredItems.length) {
      return;
    }
    hasMatchingItems = true;

    const type = getSkillType(skill);
    const group = document.createElement("optgroup");
    group.label = `${skill} (${type})`;
    filteredItems.forEach((itemName) => {
      const option = document.createElement("option");
      option.value = itemName;
      option.textContent = itemName;
      if (itemName === selectedValue) {
        option.selected = true;
      }
      group.append(option);
    });

    select.append(group);
  });

  if (!hasMatchingItems) {
    const emptyOption = document.createElement("option");
    emptyOption.value = "";
    emptyOption.textContent = "No items match search";
    emptyOption.selected = true;
    select.append(emptyOption);
    return;
  }

  if (!select.value) {
    const firstOption = select.querySelector("option");
    if (firstOption) {
      firstOption.selected = true;
    }
  }
}

function addTargetRow(selectedItem = craftableItems[0], quantity = 1) {
  const fragment = targetRowTemplate.content.cloneNode(true);
  const row = fragment.querySelector(".target-row");
  const searchInput = row.querySelector(".target-search");
  const select = row.querySelector(".target-item");
  const quantityInput = row.querySelector(".target-quantity");
  const removeButton = row.querySelector(".remove-target");
  populateItemSelect(select, selectedItem, searchInput.value);

  searchInput.addEventListener("input", () => {
    const currentSelection = select.value;
    populateItemSelect(select, currentSelection, searchInput.value);
  });

  quantityInput.value = String(quantity);

  removeButton.addEventListener("click", () => {
    row.remove();
    if (!targetsContainer.children.length && craftableItems.length) {
      addTargetRow();
    }
  });

  targetsContainer.append(row);
}

function readTargets() {
  const rows = [...targetsContainer.querySelectorAll(".target-row")];
  const targets = rows.map((row) => {
    const item = row.querySelector(".target-item").value;
    const input = row.querySelector(".target-quantity").value;
    const parsed = Number(input);
    const quantity = Number.isFinite(parsed) ? Math.floor(parsed) : 0;
    return { item, quantity };
  });
  return targets.filter((target) => target.item && target.quantity > 0);
}

function buildRequirementTree(item, quantity, ancestors = []) {
  if (ancestors.includes(item)) {
    throw new Error(`Cycle detected in recipes: ${ancestors.join(" -> ")} -> ${item}`);
  }

  const recipe = RECIPES[item];
  if (!recipe) {
    return {
      item,
      quantity,
      base: true
    };
  }

  const batches = Math.ceil(quantity / recipe.output);
  const crafted = batches * recipe.output;
  const nextAncestors = [...ancestors, item];
  const children = Object.entries(recipe.ingredients).map(([ingredient, ingredientQty]) => {
    return buildRequirementTree(ingredient, ingredientQty * batches, nextAncestors);
  });

  return {
    item,
    skill: recipe.skill,
    quantity,
    base: false,
    outputPerBatch: recipe.output,
    batches,
    crafted,
    children
  };
}

function collectBaseMaterials(treeNode, totals) {
  if (treeNode.base) {
    totals.set(treeNode.item, (totals.get(treeNode.item) || 0) + treeNode.quantity);
    return;
  }

  treeNode.children.forEach((child) => collectBaseMaterials(child, totals));
}

function calculateTargets(targets) {
  const trees = targets.map((target) => buildRequirementTree(target.item, target.quantity));
  const totals = new Map();

  trees.forEach((tree) => collectBaseMaterials(tree, totals));
  return { trees, totals };
}

function renderTotals(totals) {
  totalsBody.innerHTML = "";

  if (totals.size === 0) {
    totalsTable.hidden = true;
    totalsEmpty.hidden = false;
    return;
  }

  const orderedEntries = [...totals.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  orderedEntries.forEach(([material, amount]) => {
    const row = document.createElement("tr");
    const materialCell = document.createElement("td");
    const amountCell = document.createElement("td");

    materialCell.textContent = material;
    amountCell.textContent = formatAmount(amount);

    row.append(materialCell, amountCell);
    totalsBody.append(row);
  });

  totalsEmpty.hidden = true;
  totalsTable.hidden = false;
}
function formatRequiredMaterials(children) {
  return children
    .map((child) => `${formatAmount(child.quantity)}x ${child.item}`)
    .join(", ");
}

function createTreeListItem(node) {
  const item = document.createElement("li");
  item.className = `breakdown-node${node.base ? " breakdown-node-base" : ""}`;
  const card = document.createElement("article");
  card.className = "breakdown-card";

  if (node.base) {
    const label = document.createElement("span");
    label.className = "breakdown-base-label";
    label.textContent = "Base material";
    const amount = document.createElement("strong");
    amount.textContent = `${formatAmount(node.quantity)}x ${node.item}`;
    card.append(label, amount);
    item.append(card);
    return item;
  }

  const header = document.createElement("div");
  header.className = "breakdown-card-header";
  const title = document.createElement("h3");
  title.className = "breakdown-title";
  title.textContent = node.item;
  const skill = document.createElement("span");
  skill.className = "breakdown-skill";
  skill.textContent = node.skill;
  header.append(title, skill);

  const summarySection = document.createElement("section");
  summarySection.className = "breakdown-section";
  const summaryHeading = document.createElement("h4");
  summaryHeading.className = "breakdown-section-heading";
  summaryHeading.textContent = "Craft summary";
  const stats = document.createElement("dl");
  stats.className = "breakdown-stats";
  [
    ["Requested", formatAmount(node.quantity)],
    ["Craft", formatAmount(node.crafted)],
    ["Batches", formatAmount(node.batches)]
  ].forEach(([label, value]) => {
    const stat = document.createElement("div");
    const term = document.createElement("dt");
    const detail = document.createElement("dd");
    term.textContent = label;
    detail.textContent = value;
    stat.append(term, detail);
    stats.append(stat);
  });

  summarySection.append(summaryHeading, stats);
  card.append(header, summarySection);

  if (node.children.length) {
    const needsSection = document.createElement("section");
    needsSection.className = "breakdown-section";
    const needsHeading = document.createElement("h4");
    needsHeading.className = "breakdown-section-heading";
    needsHeading.textContent = "Required materials";
    const needs = document.createElement("div");
    needs.className = "breakdown-needs";
    const needsValue = document.createElement("span");
    needsValue.textContent = formatRequiredMaterials(node.children);
    needs.append(needsValue);
    needsSection.append(needsHeading, needs);
    card.append(needsSection);

    const stepsHeading = document.createElement("h4");
    stepsHeading.className = "breakdown-steps-heading";
    stepsHeading.textContent = "Crafting steps";
    const childrenList = document.createElement("ul");
    childrenList.className = "breakdown-tree breakdown-children";
    node.children.forEach((child) => {
      childrenList.append(createTreeListItem(child));
    });
    item.append(card, stepsHeading, childrenList);
    return item;
  }

  item.append(card);
  return item;
}

function renderBreakdown(trees) {
  breakdownContainer.innerHTML = "";

  if (!trees.length) {
    breakdownEmpty.hidden = false;
    return;
  }

  const rootList = document.createElement("ul");
  rootList.className = "breakdown-tree breakdown-root";
  trees.forEach((tree) => {
    rootList.append(createTreeListItem(tree));
  });

  breakdownContainer.append(rootList);
  breakdownEmpty.hidden = true;
}

function onCalculate() {
  clearStatus();

  const targets = readTargets();
  if (!targets.length) {
    setStatus("Add at least one craft target with a quantity above 0.", true);
    renderTotals(new Map());
    renderBreakdown([]);
    return;
  }

  try {
    const { trees, totals } = calculateTargets(targets);
    renderTotals(totals);
    renderBreakdown(trees);
    setStatus("Calculation complete.");
  } catch (error) {
    setStatus(error.message, true);
  }
}

addTargetButton.addEventListener("click", () => addTargetRow());
calculateButton.addEventListener("click", onCalculate);

renderSkillSummary();

if (!craftableItems.length) {
  setStatus("No craftable recipe data found in RECIPES.", true);
} else {
  const defaultItem = craftableItems.includes("Potion of Swiftness")
    ? "Potion of Swiftness"
    : craftableItems[0];
  addTargetRow(defaultItem, 1);
  onCalculate();
}
