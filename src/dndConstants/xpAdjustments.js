import EnemyMultiplier from "../models/EnemyMultiplier";

const ENEMY_MULTIPLIERS = [
    new EnemyMultiplier(15, 4),
    new EnemyMultiplier(11, 3),
    new EnemyMultiplier(7, 2.5),
    new EnemyMultiplier(3, 2),
    new EnemyMultiplier(2, 1.5),
    new EnemyMultiplier(1, 1)
];

export default function calculateXpMultiplier(numEnemies, numPlayers) {
    if (!numEnemies || !numPlayers) 
        return 0;
    
    // handle special edge cases
    if (numEnemies === 1 && numPlayers > 6)
        return 0.5;

    if (numPlayers === 1 && numEnemies > 15)
        return 5;
    
    let enemyDifficultyIndex = ENEMY_MULTIPLIERS.findIndex(m => numEnemies >= m.minEnemies);
    let playerPartyOffset = getPlayerPartyOffset(numPlayers);
    return ENEMY_MULTIPLIERS[enemyDifficultyIndex + playerPartyOffset].multiplier;
}


/**
 * Determines the enemy multiplier class offset based on the number of players. This accounts 
 * for additional action economy of having more players/allies 
 * @param {number} numPlayers The number of players + allies in the combat
 */
function getPlayerPartyOffset(numPlayers) {
    if (numPlayers >= 6) return +1;
    if (numPlayers >= 3) return 0;
    return -1;
}