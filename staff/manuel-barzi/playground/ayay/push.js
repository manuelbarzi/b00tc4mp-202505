import './Ayay.js'

Ayay.prototype.push = function () {
    for (let i = 0; i < arguments.length; i++) {
        const argument = arguments[i]

        this[this.length] = argument
        this.length++
    }

    return this.length
}