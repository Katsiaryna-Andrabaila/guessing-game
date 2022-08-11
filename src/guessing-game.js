class GuessingGame {
    constructor(number) {
        this.number = number
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return Math.round((this.min + this.max) / 2);
    }

    lower() {
        this.setRange(this.min, this.guess());
    }

    greater() {
        this.setRange(this.guess(), this.max);
    }
}

module.exports = GuessingGame;
