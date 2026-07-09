const CRAFTING_CATEGORIES = Object.freeze([
  "Smithing",
  "Woodworking",
  "Fletching",
  "Leatherworking",
  "Tailoring",
  "Cooking",
  "Alchemy",
  "Runecrafting",
  "Jewelry"
]);

const RECIPES = Object.freeze({
  "Copper Bar": {
    category: "Smithing",
    output: 1,
    ingredients: {
      "Copper Ore": 3,
      Coal: 1
    }
  },
  "Tin Bar": {
    category: "Smithing",
    output: 1,
    ingredients: {
      "Tin Ore": 3,
      Coal: 1
    }
  },
  "Bronze Bar": {
    category: "Smithing",
    output: 1,
    ingredients: {
      "Copper Bar": 1,
      "Tin Bar": 1
    }
  },
  "Iron Bar": {
    category: "Smithing",
    output: 1,
    ingredients: {
      "Iron Ore": 3,
      Coal: 2
    }
  },
  "Steel Bar": {
    category: "Smithing",
    output: 1,
    ingredients: {
      "Iron Bar": 2,
      Coal: 2
    }
  },
  "Bronze Sword": {
    category: "Smithing",
    output: 1,
    ingredients: {
      "Bronze Bar": 3,
      "Leather Strip": 2,
      "Oak Plank": 1
    }
  },
  "Iron Sword": {
    category: "Smithing",
    output: 1,
    ingredients: {
      "Iron Bar": 3,
      "Leather Strip": 2,
      "Oak Plank": 1
    }
  },
  "Steel Sword": {
    category: "Smithing",
    output: 1,
    ingredients: {
      "Steel Bar": 3,
      "Leather Strip": 2,
      "Oak Plank": 1
    }
  },
  Plank: {
    category: "Woodworking",
    output: 2,
    ingredients: {
      "Wood Log": 1
    }
  },
  "Oak Plank": {
    category: "Woodworking",
    output: 2,
    ingredients: {
      "Oak Log": 1
    }
  },
  "Hardwood Plank": {
    category: "Woodworking",
    output: 2,
    ingredients: {
      "Hardwood Log": 1
    }
  },
  "Iron Rivet": {
    category: "Woodworking",
    output: 5,
    ingredients: {
      "Iron Bar": 1
    }
  },
  "Wooden Shield": {
    category: "Woodworking",
    output: 1,
    ingredients: {
      "Oak Plank": 3,
      "Leather Strip": 2,
      "Iron Rivet": 4
    }
  },
  "Arrow Shaft": {
    category: "Fletching",
    output: 10,
    ingredients: {
      "Oak Plank": 1
    }
  },
  "Bronze Arrowhead": {
    category: "Fletching",
    output: 10,
    ingredients: {
      "Bronze Bar": 1
    }
  },
  "Bronze Arrow": {
    category: "Fletching",
    output: 10,
    ingredients: {
      "Arrow Shaft": 10,
      "Bronze Arrowhead": 10,
      Feather: 10
    }
  },
  "Leather Strip": {
    category: "Leatherworking",
    output: 2,
    ingredients: {
      "Raw Hide": 1
    }
  },
  "Leather Padding": {
    category: "Leatherworking",
    output: 1,
    ingredients: {
      "Leather Strip": 2
    }
  },
  "Leather Gloves": {
    category: "Leatherworking",
    output: 1,
    ingredients: {
      "Leather Strip": 4,
      Thread: 2
    }
  },
  "Leather Boots": {
    category: "Leatherworking",
    output: 1,
    ingredients: {
      "Leather Strip": 6,
      Thread: 2
    }
  },
  Thread: {
    category: "Tailoring",
    output: 3,
    ingredients: {
      Flax: 1
    }
  },
  "Cloth Bolt": {
    category: "Tailoring",
    output: 1,
    ingredients: {
      Cotton: 5,
      Thread: 2
    }
  },
  "Linen Robe": {
    category: "Tailoring",
    output: 1,
    ingredients: {
      "Cloth Bolt": 4,
      Thread: 3
    }
  },
  "Cooked Shrimp": {
    category: "Cooking",
    output: 1,
    ingredients: {
      "Raw Shrimp": 1
    }
  },
  "Cooked Fish": {
    category: "Cooking",
    output: 1,
    ingredients: {
      "Raw Fish": 1
    }
  },
  "Meat Stew": {
    category: "Cooking",
    output: 1,
    ingredients: {
      "Raw Meat": 2,
      Carrot: 1,
      Potato: 1
    }
  },
  "Vial of Water": {
    category: "Alchemy",
    output: 1,
    ingredients: {
      "Empty Vial": 1,
      Water: 1
    }
  },
  "Health Potion": {
    category: "Alchemy",
    output: 1,
    ingredients: {
      "Vial of Water": 1,
      "Red Herb": 2
    }
  },
  "Mana Potion": {
    category: "Alchemy",
    output: 1,
    ingredients: {
      "Vial of Water": 1,
      "Blue Herb": 2
    }
  },
  "Air Rune": {
    category: "Runecrafting",
    output: 5,
    ingredients: {
      "Rune Essence": 1
    }
  },
  "Water Rune": {
    category: "Runecrafting",
    output: 5,
    ingredients: {
      "Rune Essence": 1,
      "Water Talisman": 1
    }
  },
  "Fire Rune": {
    category: "Runecrafting",
    output: 5,
    ingredients: {
      "Rune Essence": 1,
      "Fire Talisman": 1
    }
  },
  "Bronze Ring": {
    category: "Jewelry",
    output: 1,
    ingredients: {
      "Bronze Bar": 1
    }
  },
  "Iron Ring": {
    category: "Jewelry",
    output: 1,
    ingredients: {
      "Iron Bar": 1
    }
  },
  "Steel Necklace": {
    category: "Jewelry",
    output: 1,
    ingredients: {
      "Steel Bar": 1,
      Gemstone: 1
    }
  }
});

const formatter = new Intl.NumberFormat();
const categoryPriority = new Map(CRAFTING_CATEGORIES.map((category, index) => [category, index]));
const recipeEntries = Object.entries(RECIPES);
const itemsByCategory = buildItemsByCategory(recipeEntries);
const categoryList = buildCategoryList(itemsByCategory);
const craftableItems = recipeEntries
  .map(([item]) => item)
  .sort((left, right) => compareItems(left, right));

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

function buildItemsByCategory(entries) {
  const grouped = new Map();

  entries.forEach(([itemName, recipe]) => {
    const category = recipe.category || "Uncategorized";
    if (!grouped.has(category)) {
      grouped.set(category, []);
    }
    grouped.get(category).push(itemName);
  });

  grouped.forEach((items) => items.sort((a, b) => a.localeCompare(b)));
  return grouped;
}

function compareCategories(left, right) {
  const leftRank = categoryPriority.has(left) ? categoryPriority.get(left) : Number.MAX_SAFE_INTEGER;
  const rightRank = categoryPriority.has(right) ? categoryPriority.get(right) : Number.MAX_SAFE_INTEGER;

  if (leftRank !== rightRank) {
    return leftRank - rightRank;
  }

  return left.localeCompare(right);
}

function buildCategoryList(groupedItems) {
  const discovered = [...groupedItems.keys()];
  const merged = [...new Set([...CRAFTING_CATEGORIES, ...discovered])];
  return merged.sort(compareCategories);
}

function getItemCategory(itemName) {
  return RECIPES[itemName]?.category || "Uncategorized";
}

function compareItems(left, right) {
  const categorySort = compareCategories(getItemCategory(left), getItemCategory(right));
  if (categorySort !== 0) {
    return categorySort;
  }
  return left.localeCompare(right);
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

function renderCategories() {
  categoriesListEl.innerHTML = "";

  if (!categoryList.length) {
    categoriesEmpty.hidden = false;
    return;
  }

  categoryList.forEach((category) => {
    const itemCount = (itemsByCategory.get(category) || []).length;
    const item = document.createElement("li");
    const name = document.createElement("span");
    const count = document.createElement("span");

    item.className = "category-chip";
    name.textContent = category;
    count.className = "count";
    count.textContent = `${formatAmount(itemCount)} recipe${itemCount === 1 ? "" : "s"}`;

    item.append(name, count);
    categoriesListEl.append(item);
  });

  categoriesEmpty.hidden = true;
}

function createItemSelect(selectedValue = craftableItems[0]) {
  const select = document.createElement("select");
  select.className = "target-item";

  categoryList.forEach((category) => {
    const items = itemsByCategory.get(category) || [];
    if (!items.length) {
      return;
    }

    const group = document.createElement("optgroup");
    group.label = `${category} (${items.length})`;

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

  return select;
}

function addTargetRow(selectedItem = craftableItems[0], quantity = 1) {
  const fragment = targetRowTemplate.content.cloneNode(true);
  const row = fragment.querySelector(".target-row");
  const itemLabel = row.querySelector("label:first-child");
  const quantityInput = row.querySelector(".target-quantity");
  const removeButton = row.querySelector(".remove-target");
  const select = createItemSelect(selectedItem);

  quantityInput.value = String(quantity);
  itemLabel.append(select);

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

  return targets.filter((target) => target.quantity > 0);
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
    category: recipe.category,
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

function createTreeListItem(node) {
  const item = document.createElement("li");

  if (node.base) {
    item.textContent = `${formatAmount(node.quantity)}x ${node.item} (base)`;
    return item;
  }

  item.textContent =
    `${formatAmount(node.quantity)}x ${node.item} [${node.category}] -> craft ${formatAmount(node.crafted)} ` +
    `(${formatAmount(node.batches)} batch${node.batches === 1 ? "" : "es"})`;

  if (node.children.length) {
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

renderCategories();

if (!craftableItems.length) {
  setStatus("No craftable recipe data found in RECIPES.", true);
} else {
  const defaultItem = craftableItems.includes("Steel Sword") ? "Steel Sword" : craftableItems[0];
  addTargetRow(defaultItem, 1);
  onCalculate();
}
