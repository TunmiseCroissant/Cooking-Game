const prompt = require('prompt-sync')({ sigint: true });

const name = prompt("How are you?")
console.log(`I'm glad you're ${name}, User.`)