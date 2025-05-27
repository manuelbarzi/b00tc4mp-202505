global.Ayay = function Ayay() {
    this.length = arguments.length

    for (let i = 0; i < arguments.length; i++) {
        const argument = arguments[i]

        this[i] = argument
    }
}