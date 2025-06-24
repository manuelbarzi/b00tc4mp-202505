const a = () => {
    console.log('a')

    return !true
}

const b = () => {
    console.log('b')

    return true
}

a() && b()