import { getValue } from './getValue.js'

console.info('TEST getValue')

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

console.info('CASE gets first level value in object tree')

{
    const value = getValue(o1, 'k3')

    console.assert(value === 'first do it', 'value is "first do it"')
}

console.info('CASE gets second level value in object tree')

{
    const value = getValue(o1, 'k2.k2')

    console.assert(value === 'i love coding', 'value is "i love coding"')
}

console.info('CASE gets third level value in object tree')

{
    const value = getValue(o1, 'k2.k1.k5')

    console.assert(value === 123, 'value is 123')
}

console.info('CASE gets fourth level value in object tree')

{
    const value = getValue(o1, 'k2.k1.k2.k1')

    console.assert(value === true, 'value is true')
}

console.info('CASE gets fifth level value in object tree')

{
    const value = getValue(o1, 'k1.3.3.k2.k1')

    console.assert(value === 'world', 'value is "world"')
}