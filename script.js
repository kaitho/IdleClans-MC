const SKILL_TYPES = Object.freeze({
  Processing: Object.freeze(["Brewing"])
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

function populateItemSelect(select, selectedValue = craftableItems[0]) {
  select.innerHTML = "";

  skillList.forEach((skill) => {
    const items = recipesBySkill.get(skill) || [];
    if (!items.length) {
      return;
    }

    const type = getSkillType(skill);
    const group = document.createElement("optgroup");
    group.label = `${skill} (${type})`;

    items.forEach((itemName) => {
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
}

function addTargetRow(selectedItem = craftableItems[0], quantity = 1) {
  const fragment = targetRowTemplate.content.cloneNode(true);
  const row = fragment.querySelector(".target-row");
  const select = row.querySelector(".target-item");
  const quantityInput = row.querySelector(".target-quantity");
  const removeButton = row.querySelector(".remove-target");
  populateItemSelect(select, selectedItem);

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

  if (node.base) {
    item.textContent = `${formatAmount(node.quantity)}x ${node.item} (base)`;
    return item;
  }
  const summary = document.createElement("div");
  summary.className = "breakdown-summary";
  summary.textContent =
    `${formatAmount(node.quantity)}x ${node.item} [${node.skill}] -> craft ${formatAmount(node.crafted)} ` +
    `(${formatAmount(node.batches)} batch${node.batches === 1 ? "" : "es"})`;
  item.append(summary);

  if (node.children.length) {
    const needs = document.createElement("div");
    needs.className = "breakdown-needs";
    needs.textContent = `Materials needed: ${formatRequiredMaterials(node.children)}`;
    item.append(needs);
    const childrenList = document.createElement("ul");
    node.children.forEach((child) => {
      childrenList.append(createTreeListItem(child));
    });
    item.append(childrenList);
  }

  return item;
}

function renderBreakdown(trees) {
  breakdownContainer.innerHTML = "";

  if (!trees.length) {
    breakdownEmpty.hidden = false;
    return;
  }

  const rootList = document.createElement("ul");
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