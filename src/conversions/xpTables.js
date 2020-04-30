import DifficultyThreshold from '../models/DiffucultyThreshold';

/**
 * Calculates the amount of experience rewarded for defeating an enemy of the given CR.
 * @param {string} cr The CR of the enemy type. For example goblins are "1/4" or ".25" and bugbears are "1".
 */
export function getXpFromCr(cr) {
    switch (cr) {
        case "1/8":
        case "0.125":
        case ".125":
            return 25;

        case "1/4":
        case "0.25":
        case ".25":
            return 50;

        case "1/2":
        case "0.5":
        case ".5":
            return 100;

        case "1": return 200;
        case "2": return 450;
        case "3": return 700;
        case "4": return 1100;
        case "5": return 1800;
        case "6": return 2300;
        case "7": return 2900;
        case "8": return 3900;
        case "9": return 5000;
        case "10": return 5900;
        case "11": return 7200;
        case "12": return 8400;
        case "13": return 10000;
        case "14": return 11500;
        case "15": return 13000;
        case "16": return 15000;
        case "17": return 18000;
        case "18": return 20000;
        case "19": return 22000;
        case "20": return 25000;
        case "21": return 33000;
        case "22": return 41000;
        case "23": return 50000;
        case "24": return 62000;
        case "25": return 75000;
        case "26": return 90000;
        case "27": return 105000;
        case "28": return 120000;
        case "29": return 135000;
        case "30": return 155000;

        default: return 0;
    }
}
/**
 * Gets the experience thresholds for a player character. Also includes dailyMax (the suggested cap for encounter XP per long-rest).
 * @param {Number} playerLevel Level of the player (as an number).
 * @returns {DifficultyThreshold} An object representing the threshold of difficulty for the given player-level.
 */
export function getDifficultyThresholds(playerLevel) {
    switch (playerLevel) {
        case 1: return new DifficultyThreshold(25, 50, 75, 100, 300);
        case 2: return new DifficultyThreshold(50, 100, 150, 200, 600);
        case 3: return new DifficultyThreshold(75, 150, 225, 400, 1200);
        case 4: return new DifficultyThreshold(125, 250, 375, 500, 1700);
        case 5: return new DifficultyThreshold(250, 500, 750, 1100, 3500);
        case 6: return new DifficultyThreshold(300, 600, 900, 1400, 4000);
        case 7: return new DifficultyThreshold(350, 750, 1100, 1700, 5000);
        case 8: return new DifficultyThreshold(450, 900, 1400, 2100, 6000);
        case 9: return new DifficultyThreshold(550, 1100, 1600, 2400, 7500);
        case 10: return new DifficultyThreshold(600, 1200, 1900, 2800, 9000);
        case 11: return new DifficultyThreshold(800, 1600, 2400, 3600, 10500);
        case 12: return new DifficultyThreshold(1000, 2000, 3000, 4500, 11500);
        case 13: return new DifficultyThreshold(1100, 2200, 3400, 5100, 13500);
        case 14: return new DifficultyThreshold(1250, 2500, 3800, 5700, 15000);
        case 15: return new DifficultyThreshold(1400, 2800, 4300, 6400, 18000);
        case 16: return new DifficultyThreshold(1600, 3200, 4800, 7200, 20000);
        case 17: return new DifficultyThreshold(2000, 3900, 5900, 8800, 25000);
        case 18: return new DifficultyThreshold(2100, 4200, 6300, 9500, 27000);
        case 19: return new DifficultyThreshold(2400, 4900, 7300, 10900, 30000);
        case 20: return new DifficultyThreshold(2800, 5700, 8500, 12700, 40000);
    }
}