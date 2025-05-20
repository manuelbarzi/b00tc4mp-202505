// https://docs.google.com/spreadsheets/d/1q9wCdee_0CeLgLNyVqHfCONq7_TgKEQwB1T_GTtVrGA/edit?usp=sharing

// objects

var sabrina = {
    studies: {
        superior: [{
            name: 'architecture',
            year: 2015
        }, {
            name: 'keep coding',
            year: 2023
        }],

        basic: [{
            name: 'primary',
            year: 2003
        }, {
            name: 'secondary',
            year: 2008
        }]
    },

    hobbies: [{
        name: 'football',
        experience: 3
    }, {
        name: 'dance',
        experience: 14
    }, {
        name: 'photography',
        experience: 13
    }]
}

var secondaryYear = sabrina['studies']['basic']['1']['year']
console.log(secondaryYear)
// 2008


sabrina.get = function (path) {
    // path = 'studies.basic.1.year'
    // 'studies.basic.1.year'.split('.')
    // ['studies', 'basic', '1', 'year']
    // sabrina['studies']
    // sabrina['studies']['basic']
    // sabrina['studies']['basic']['1']
    // sabrina['studies']['basic']['1']['year']

    var keys = path.split('.')

    var value = sabrina

    for (var i = 0; i < keys.length; i++) {
        var key = keys[i]

        value = value[key]
    }

    return value
}

var secondaryYear = sabrina.get('studies.basic.1.year')
console.log(secondaryYear)
// 2008

// primitives

var num = 10

num.name = 'D10S'
console.log(num.name)
// undefined

console.log(num)

// re-assign value (copy 7)
var num = 7

var salute = 'hello sabrina'

var words = salute.split(' ')
console.log(words)
console.log(salute)

console.log(salute[0])
// h
salute[0] = 'H'
console.log(salute[0])
// h
