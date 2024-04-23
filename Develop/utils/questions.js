const inquirer = require("inquirer");

const askQuestions = () => inquirer.prompt([
{
   type: "input",
   message: "Enter title",
   name: "title",
},
{
   type: "input",
   messgae: "Enter description",
   name: "description",
},
{
   type: "input",
   message: "How is this installed?",
   name: "installation",
},
{
   type: "input",
   messgae: "How do you use this application?",
   name: "usage",
},
{
   type: "list",
   message: "What are the licenses?",
   name: "license",
   choices: ["Apache License 2.0", "GNU General Pulic License v3.0", "MIT License", "BSD 2-Clause Simplified License", "BSD 3-Clause New or Revised License", "Boost Software License 1.0", "Creative Commons Zero v1.0", "Eclipse Public License 2.0"]
},
{
   type: "input",
   message: "Who contributed?",
   name: "contributing",
},
{
   type: "input",
   message: "What tests need to be done?",
   name: "tests",
},
{
   type: "input",
   message: "What is your Github?",
   name: "github",
},
{
   type: "input",
   message: "What is your email?",
   name: "email",
}
])


module.exports = {
   askQuestions
}















