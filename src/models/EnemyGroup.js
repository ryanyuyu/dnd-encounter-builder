import { getXpFromCr } from '../dndConstants/xpConversion';

/**
 * Class representing a group of same-type enemies.  For example, a group of 3 Goblins (CR 1/4)
 */
export default class EnemyGroup {
    /**
     * Creates a new EnemyGroup from the given data.
     * @param {string} name Name of the enemy type ('Goblin')
     * @param {number} count Number of enemies in the group (3)
     * @param {string} cr Challenge Rating of the enemy type ('1/4')
     * @param {boolean} isRelevant (optional) Whether the group is relevant for XP calculations. Defaults true.
     */
    constructor(name, count, cr, isRelevant = true) {
        this.name = name;
        this.count = count;
        this.cr = cr;
        this.isRelevant = isRelevant;
    }

    get experience() {
        return this.isRelevant 
            ? this.count * getXpFromCr(this.cr)
            : 0;
    }
}