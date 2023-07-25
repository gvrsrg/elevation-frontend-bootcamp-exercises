class Player {
    constructor(name) {
        this.name = name
    }

    say(message) {
        console.log(`${this.name}: ${message}`)
    }
}

module.exports = Player