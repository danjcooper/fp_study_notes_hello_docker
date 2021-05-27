const ui = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

ui.question('Hi there! What is your name?\n\n', input => {
    const message = sayHello(input)
    console.log(message)
    const messageTwo = sayNameLength(input)
    console.log(messageTwo)
    ui.close();
})



function sayHello(name) {
    return `\tHello, ${name}!\n`
}

function sayNameLength(name) {
    // The name length will count spaces as a letter, this calculates the spaces and removes them from the total.
    let count = 0
    for (let i = 0; i < name.length; i++) {
        if (name[i] === ' ') {
            count++
        }
    }

    return `Your name is ${name.length - count} letters long.`
}