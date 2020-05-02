export default class Player {
    constructor(name, level) {
        this.name = name;
        this.level = level || 1; //default player level to 1 instead of inavlid 0
    }
}