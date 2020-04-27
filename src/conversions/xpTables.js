



/**
 * Calculates the amount of experience rewarded for defeating an enemy of the given CR.
 * @param {string} cr The CR of the enemy type. For example goblins are "1/4" or ".25" and bugbears are "1".
 */
function getXpFromCr(cr) {
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
 * @param {number} playerLevel Level of the player (as an number).
 */
function getDifficultyThresholds(playerLevel) {
    switch (playerLevel) {
        case 1:
            return {
                "easy": 25,
                "medium": 50,
                "hard": 75,
                "deadly": 100,
                "dailyMax": 300
            };
        case 2:
            return {
                "easy": 50,
                "medium": 100,
                "hard": 150,
                "deadly": 200,
                "dailyMax": 600
            };
        case 3:
            return {
                "easy": 75,
                "medium": 150,
                "hard": 225,
                "deadly": 400,
                "dailyMax": 1200
            };
        case 4:
            return {
                "easy": 125,
                "medium": 250,
                "hard": 375,
                "deadly": 500,
                "dailyMax": 1700
            };
        case 5:
            return {
                "easy": 250,
                "medium": 500,
                "hard": 750,
                "deadly": 1100,
                "dailyMax": 3500
            };
        case 6:
            return {
                "easy": 300,
                "medium": 600,
                "hard": 900,
                "deadly": 1400,
                "dailyMax": 4000
            };
        case 7:
            return {
                "easy": 350,
                "medium": 750,
                "hard": 1100,
                "deadly": 1700,
                "dailyMax": 5000
            };
        case 8:
            return {
                "easy": 450,
                "medium": 900,
                "hard": 1400,
                "deadly": 2100,
                "dailyMax": 6000
            };
        case 9:
            return {
                "easy": 550,
                "medium": 1100,
                "hard": 1600,
                "deadly": 2400,
                "dailyMax": 7500
            };
        case 10:
            return {
                "easy": 600,
                "medium": 1200,
                "hard": 1900,
                "deadly": 2800,
                "dailyMax": 9000
            };
        case 11:
            return {
                "easy": 800,
                "medium": 1600,
                "hard": 2400,
                "deadly": 3600,
                "dailyMax": 10500
            };
        case 12:
            return {
                "easy": 1000,
                "medium": 2000,
                "hard": 3000,
                "deadly": 4500,
                "dailyMax": 11500
            };
        case 13:
            return {
                "easy": 1100,
                "medium": 2200,
                "hard": 3400,
                "deadly": 5100,
                "dailyMax": 13500
            };
        case 14:
            return {
                "easy": 1250,
                "medium": 2500,
                "hard": 3800,
                "deadly": 5700,
                "dailyMax": 15000
            };
        case 15:
            return {
                "easy": 1400,
                "medium": 2800,
                "hard": 4300,
                "deadly": 6400,
                "dailyMax": 18000
            };
        case 16:
            return {
                "easy": 1600,
                "medium": 3200,
                "hard": 4800,
                "deadly": 7200,
                "dailyMax": 20000
            };
        case 17:
            return {
                "easy": 2000,
                "medium": 3900,
                "hard": 5900,
                "deadly": 8800,
                "dailyMax": 25000
            };
        case 18:
            return {
                "easy": 2100,
                "medium": 4200,
                "hard": 6300,
                "deadly": 9500,
                "dailyMax": 27000
            };
        case 19:
            return {
                "easy": 2400,
                "medium": 4900,
                "hard": 7300,
                "deadly": 10900,
                "dailyMax": 30000
            };
        case 20:
            return {
                "easy": 2800,
                "medium": 5700,
                "hard": 8500,
                "deadly": 12700,
                "dailyMax": 40000
            };
        default: 
            return null; // throw exception?
    }
}

class DifficultyThreshold {
    constructor(easy, medium, hard, deadly, dailyMax) {
        this.easy = easy;
        this.medium = medium;
        this.hard = hard;
        this.deadly = deadly;
        this.dailyMax = dailyMax;
    }

    constructThresholdFromArray(sortedArray) {
        return new DifficultyThreshold(sortedArray[0], sortedArray[1], sortedArray[2], sortedArray[3], sortedArray[4]);
    }

    getDifficulty(xp) {

    } 
}