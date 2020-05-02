# dnd-encounter-builder
Encounter builder for DnD 5e to estimate difficulty.

See the application at https://github.com/ryanyuyu/dnd-encounter-builder

## About the builder
This encounter builder uses the advice in the Dungeon Master's Guide (DMG) to estimate the difficulty of an encounter. The DMG suggests estimating difficulty by comparing the party's level to the Challenge Rating (CR) of enemies. This is accomplished by converting the CR of enemies into experience, multiplying by an offset based on the number of players and enemies to account for action economy, and then comparing the calculated number to a table of difficulty ranges based on player level.

## Determine the enemy experience total
First determine all the important opponents for the fight. By default, all creatures added the encounter are considered to be a part of the fight. However, there are a few reasons an enemy should not be considered when making this calculation:
 - The enemy is significantly weaker than the party or other enemies in the encounter
 - The enemy is impaired or otherwise a non-combatant due to encounter-specific reasons

## Determine player difficulty ranges

## Determine experience multiplier

## Other considerations

## Developer Notes
This encounter builder is a Vue app. This repo holds only the source files necessary for development, not the actual artifacts that are built/deployed. 

The Travis setup (found in `.travis.yml`) builds the Vue application when a pull request is merged into master. Travis deploys the build to the `gh-pages` branch, which is the branch configured to be deployed to https://github.com/ryanyuyu/dnd-encounter-builder via GitHub Pages.
