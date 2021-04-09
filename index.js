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
    message: "Please describe your project?(i.e. motivations/problems aimed at solving/what did you learn,etc",
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Please enter a description of your project.");
        }
        return true;
    }
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
    message:"Please provide information on the usage of this application.",
},

{
    type:"list",
    name:"license",
    message:"Please choose any licensing agreements",
    choices:["MIT", "Apache License 2.0", "GNU GPLv3", "None" ],
  
    
},

{
    type:"confirm",
    name:"contributing",
    message:"Are there any contributors you would like to mention?",
},
{
    type: "input",
    name: 'contributingInfo',
    message: ' Please provide or list your contributions',
    when: function (answers) {
        return answers.contributing;
    }

},
{
    type:"confirm",
    name:'tests',
    message: "Would you like to provide any test examples?",
},
{
    type: 'input',
    name: 'testInputs',
    message: 'Please add your test examples or descriptions',
    when: function (answers) {
        return answers.tests;
    }
},

{
    type:"input",
    name:'github',
    message: "Please provide your github url",
},
{
    type:"input",
    name:'email',
    message: "Please provide your email",
    validate: function (email) {
        validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (validEmail) {
            console.log('valid email was entered');
            return true;
        } else {
            console.log('Email entered is not valid');
            return false;
        }
    }
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
    writeToFile('./GeneratedFolder/readme.md', newPageContent);

    })
    
}

// Function call to initialize app
init();

