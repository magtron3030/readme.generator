// TODO: Include packages needed for this application
const {makeLog} = require("./utils/log")
const {askQuestions} = require("./utils/questions")
askQuestions().then( (contents) => makeLog("README.md", contents))



// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


