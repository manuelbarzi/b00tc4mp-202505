import { setValue } from './setValue.js'

console.info('TEST setValue')

const o1 = {
    k1: [
        10,
        { k1: 100, k2: 200, k3: 300 },
        function () { return 20 },
        [30, 40, 50, {
            k1: 'hello',
            k2: {
                k1: 'world'
            }
        }]
    ],
    k2: {
        k1: {
            k1: {
                k1: 'hola',
                k2: 'mundo'
            },
            k2: {
                k1: true,
                k2: false
            },
            k3: {
                k1: undefined,
                k2: null
            },
            k4: {
                k1: NaN,
                k2: Infinity
            },
            k5: 123
        },
        k2: 'i love coding'
    },
    k3: 'first do it'
}

console.info('CASE sets first level value in object tree')

{
    setValue(o1, 'k3', 'FIRST DO IT')

    console.assert(o1.k3 === 'FIRST DO IT', 'value is "FIRST DO IT"')
}

console.info('CASE sets second level value in object tree')

{
    setValue(o1, 'k1.0', 'D10S')

    console.assert(o1.k1[0] === 'D10S', 'value is "D10S"')
}

// TODO add more test cases for deeper levels

