class Time {
    constructor() {
        this.date = new Date();
    }
    
    getTimeStr() {
        return `${this.date.getHours()}시 ${this.date.getMinutes()}분`;
    }
}