# dnd-encounter-builder
Encounter builder for DnD 5e to estimate difficulty.

See the application at https://ryanyuyu.github.io/dnd-encounter-builder/

## Definitions of difficulty:

 - __Easy__: An easy encounter doesn't tax the characters' resources or put them in serious peril. They might lose a few hit points, but victory is pretty much guaranteed
 - __Medium__: A medium encounter usually has one or two scary monsters for the players, but the characters should emerge victorious with no casualties. One or more of them might need to use healing resources.
 - __Hard__: A hard encounter could go badly for the adventurers. Weaker characters might get taken out of the fight, and there's a slim chance that one or more characters might die.
 - __Deadly__: A deadly encounter could be lethal for one or more player characters. Survival often requires good tactics and quick thinking, and the party risks defeat.

## About the builder
This encounter builder uses the advice in the Dungeon Master's Guide (DMG) to estimate the difficulty of an encounter. The DMG suggests estimating difficulty by comparing the party's level to the Challenge Rating (CR) of enemies. This is accomplished by converting the CR of enemies into experience, multiplying by an offset based on the number of players and enemies to account for action economy, and then comparing the calculated number to a table of difficulty ranges based on player level.

## Details

### Determine the enemy experience total
First determine all the important opponents for the fight. By default, all creatures added the encounter are considered to be a part of the fight. However, there are a few reasons an enemy should not be considered when making this calculation:
 - The enemy is significantly weaker than the party or other enemies in the encounter
 - The enemy is impaired or otherwise a non-combatant due to encounter-specific reasons

### Determine player difficulty ranges
Next determine all the important players and allies. Find the row corresponding to their level in the difficulty table and sum the party's experience at each threshold.

### Determine experience multiplier
Disparities in party and enemy numbers change the balance of the action economy, which can make encounters easier or harder. The precise rules and tables can be found in the DMG, but in general:
 - More enemies creates a harder encounter. This is reflected by increasing the XP multiplier when determining difficulty.
 - More players in the party makes the encounter easier. This is reflected by decreasing the XP multiplier.

### Match the adjusted enemy experience to the combined player threshold

## Other considerations
These difficulty estimates are a baseline. Many other factors can alter the actual difficulty of the combat:
 - Environmental considerations and home-field advantage (such as a monster being fought in its lair)
 - How late in the day it is affects the resources the players may have (running low on spell slots)
 - Monster resistances/weakness can vary in relevance, in which case their CR might need to be adjusted. For example, if the players do not have a Cleric or a Paladin, encounters against Undead may be extra difficult.

## Developer Notes
This encounter builder is a Vue app. This repo holds only the source files necessary for development, not the actual artifacts that are built/deployed. 

The Travis setup (found in `.travis.yml`) builds the Vue application when a pull request is merged into master. Travis deploys the build to the `gh-pages` branch, which is the branch configured to be deployed to https://github.com/ryanyuyu/dnd-encounter-builder via GitHub Pages.
