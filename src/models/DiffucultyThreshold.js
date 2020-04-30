export default class DifficultyThreshold {
    constructor(easy, medium, hard, deadly, dailyMax) {
        this.easy = easy;
        this.medium = medium;
        this.hard = hard;
        this.deadly = deadly;
        this.dailyMax = dailyMax;
    }

    /**
     * Alterantive constructor-like function to get a new DifficultyThreshold from a sorted array
     * @param {array} sortedArray Is a sorted 5-element array (4 experience thresholds + 1 daily max threshold). 
     * @returns {DifficultyThreshold} The constructed object.
     */
    constructThresholdFromArray(sortedArray) {
        return new DifficultyThreshold(sortedArray[0], sortedArray[1], sortedArray[2], sortedArray[3], sortedArray[4]);
    }

    /**
     * Takes an experience value and returns the proper difficulty label associated with the Threshold
     * @param {Number} xp 
     */
    getDifficulty(xp) {
        if (xp < this.easy) return "Very Easy";
        if (xp < this.medium) return "Easy";
        if (xp < this.hard) return "Medium";
        if (xp < this.deadly) return "Hard";
        return "Deadly";
    }
}