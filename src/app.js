/**
 * Starting point of application
 */


import readline from 'readline'
import { FactsGenerator } from './factGenerator.js' 

const facts = new FactsGenerator()

const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const randomFact = await facts.getRandomFact()

readLine.question('Enter your name please: ', (name) => {
    console.log(`Hello ${name}! `)
    console.log(`Random Fact: ${randomFact}`)
    readLine.close()
})

