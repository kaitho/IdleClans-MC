const RECIPES = Object.freeze({
  "Copper Bar": {
    output: 1,
    ingredients: {
      "Copper Ore": 3,
      Coal: 1
    }
  },
  "Tin Bar": {
    output: 1,
    ingredients: {
      "Tin Ore": 3,
      Coal: 1
    }
  },
  "Bronze Bar": {
    output: 1,
    ingredients: {
      "Copper Bar": 1,
      "Tin Bar": 1
    }
  },
  "Iron Bar": {
    output: 1,
    ingredients: {
      "Iron Ore": 3,
      Coal: 2
    }
  },
  "Steel Bar": {
    output: 1,
    ingredients: {
      "Iron Bar": 2,
      Coal: 2
    }
  },
  "Leather Strip": {
    output: 2,
    ingredients: {
      "Raw Hide": 1
    }
  },
  "Bronze Sword": {
    output: 1,
    ingredients: {
      "Bronze Bar": 3,
      "Leather Strip": 2,
      Wood: 1
    }
  },
  "Iron Sword": {
    output: 1,
    ingredients: {
      "Iron Bar": 3,
      "Leather Strip": 2,
      Wood: 1
    }
  },
  "Steel Sword": {
    output: 1,
    ingredients: {
      "Steel Bar": 3,
      "Leather Strip": 2,
      Wood: 1
    }
  }
});

const craftableItems = Object.keys(RECIPES).sort((a, b) => a.localeCompare(b));
const formatter = new Intl.NumberFormat();

const targetsContainer = document.querySelector("#targets");
const statusEl = document.querySelector("#status");
const totalsTable = document.querySelector("#totals-table");
const totalsBody = document.querySelector("#totals-body");
const totalsEmpty = document.querySelector("#totals-empty");
const breakdownContainer = document.querySelector("#breakdown");
const breakdownEmpty = document.querySelector("#breakdown-empty");
const targetRowTemplate = document.querySelector("#target-row-template");
const addTargetButton = document.querySelector("#add-target");
const calculateButton = document.querySelector("#calculate");

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

function createItemSelect(selectedValue = craftableItems[0]) {
  const select = document.createElement("select");
  select.className = "target-item";

  craftableItems.forEach((itemName) => {
    const option = document.createElement("option");
    option.value = itemName;
    option.textContent = itemName;
    if (itemName === selectedValue) {
      option.selected = true;
    }
    select.append(option);
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
    if (!targetsContainer.children.length) {
      addTargetRow();
    }
  });

  targetsContainer.append(row);
}

function readTargets() {
  const rows = [...targetsContainer.querySelectorAll(".target-row")];
  const targets = rows.map((row) => {
    const item = row.querySelector(".target-item").value;
    const quantity = Number(row.querySelector(".target-quantity").value);
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
    `${formatAmount(node.quantity)}x ${node.item} -> craft ${formatAmount(node.crafted)} ` +
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

if (!craftableItems.length) {
  setStatus("No craftable recipe data found in RECIPES.", true);
} else {
  addTargetRow("Bronze Sword", 1);
  onCalculate();
}
