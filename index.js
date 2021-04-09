// Include packages needed for this application
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown") 

const inquirer = require("inquirer");

// Array of Questions to ask user to get inputs
const questions = [ {
    
    type:'input',
    name: "title",
    message: "What is your project name?",
   validate: function (answer) {
       if (answer.length < 1) {
           return console.log("Please enter the title of your project.");
       }
       return true;
   }
    
},
{
    type: "input",
    name: "name",
    message: 'Please enter your first and last name'

},
{
    type: "input",
    name:"description",
    message: "Please describe your project?",
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Please enter a description of your project.");
        }
        return true;
    }
   
},

{
    type:"input",
    name:"motivation",
    message:"What was your motivation for your project>",
},
{
    type:"input",
    name:"solve",
    message:"What problem does your project aim to solve?",
},
{
    type:"input",
    name:"learn",
    message:"What did you learn from working on this project?",
},
{
    type:'input',
    name:'installation',
    message:"What are the steps needed to install or view your application?",
},
{
    type:"input",
    name:"githublive",
    message:"Please enter your applications github live site url",
},
{
    type:"input",
    name:"githubrepo",
    message:'Please enter your projects github repo site',
},
{
    type:"input",
    name:"usage",
    message:"Please provide instructions or screenshots on how your application works or can be used",
},

{
    type:"list",
    name:"license",
    message:"Please choose any licensing agreements",
    choices:["MIT", "Apache License 2.0", "GNU GPLv3", "None" ],
  
    
},

{
    type:"input",
    name:"contributing",
    message:"Are there any contributors you would like to mention?",
},
{
    type:"input",
    name:'tests',
    message: "Please provide any examples of or tests you have written out to test your applications functionality",
},

{
    type:"input",
    name:'github',
    message: "Please provide your github url",
},
{
    type:"input",
    name:'email',
    message: "Please provide your email"
}
];



// Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('successfully created new readme and loaded in users respones')
    });
}

// Function to initialize app
function init() {

    inquirer.prompt(questions).then(function(answers){

    const newPageContent = generateMarkdown(answers);
    writeToFile('readme.md', newPageContent);

    })
    
}

// Function call to initialize app
init();

