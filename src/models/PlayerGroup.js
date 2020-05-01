export default class PlayerGroup {
    constructor(count, level) {
        this.count = count;
        this.level = level || 1; //default player level to 1 instead of inavlid 0
    }
}