# Idle Clans Materials Calculator

- Version 0.1b

Idle Clans Material Calculator website.

This project now includes a simple static web app that calculates how many base materials ("mats") you need to craft one or more target items.

## Compability
- Browser ✅
- Mobile  ✅

## Current skills in the UI:
- Brewing
- Cooking
- Crafting

## Features
- Pick multiple craft targets and quantities.
- Browse items grouped by Brewing, Cooking, and Crafting.
- See recipe counts per supported processing skill.
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
- Brewing recipes are now aligned with the official Brewing wiki skill table.
- Cooking recipes are aligned with the official Cooking wiki skill table.
- Crafting recipes are aligned with the official Crafting wiki skill table.
