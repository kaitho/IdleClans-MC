# IdleClans-RC
Idle Clans Reagents Calculator website.

This project now includes a simple static web app that calculates how many base materials ("mats") you need to craft one or more target items.

## Features
- Pick multiple craft targets and quantities.
- Browse items grouped by official Idle Clans skill.
- See all game skills with recipe counts.
- Recursively expands recipe chains.
- Aggregates total base materials across all targets.
- Shows a nested crafting breakdown.
- Rounds crafting requirements up to whole recipe batches.

## Run locally
Open `index.html` in a browser.

Or serve it with a local static server:
```bash
cd /workspace/IdleClans-RC
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

## Recipe data
Recipes are defined in `script.js` under the `RECIPES` object.

- Any item that does **not** have a recipe entry is treated as a base material.
- Each recipe has a `skill`, `output`, and `ingredients`.
- Add or edit recipe entries there to match the latest Idle Clans data.

Current game skills in the UI (from the Idle Clans Skills wiki page):
- Gathering: Fishing, Woodcutting, Mining, Foraging, Invocation - Archaeological sites
- Processing: Cooking, Carpentry, Smithing, Crafting, Farming, Brewing
- Combat: Attack, Defence, Strength, Archery, Magic, Exterminating, Invocation - Rituals
- Utility: Agility, Enchanting
- Other: Plundering, Item creation
