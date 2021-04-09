//require license.js
const license = require('./license');

//Destructure license object, store in a variable to use
const { mitLicense } = license;
const { apacheLicense } = license;
const { gnuLicense } = license;
//set up Date object to get current year
let year = new Date();



// Function that checks what the user response was and returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if (license === "MIT") {
    return license = `\r[![License MIT](https://img.shields.io/apm/l/pack)](https://spdx.org/licenses/MIT.html)`;
   } else if (license === "Apache License 2.0") {
    return license = `\r[![License Apache License 2.0](https://img.shields.io/aur/license/android-studio)](https://spdx.org/licenses/Apache-2.0.html)`;
   } else if (license === "GNU GPLv3") {
    return license = `\r[![License GNU GPLv3](https://img.shields.io/aur/license/pa)](https://spdx.org/licenses/GPL-3.0-or-later.html)`;
   } else {
     return " ";
   }
}

// Function that checks user input response and returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

if (license === "MIT"){
  
  return license = `https://opensource.org/licenses/MIT`;
  
}
else if (license === "Apache License 2.0") {
  return license = `https://opensource.org/licenses/Apache-2.0`;
}
else if (license === "GNU GPLv3") {
  return license = `https://opensource.org/licenses/GPL-3.0`
}
else {
  return "";
}
}

// Function that that checks user input response and returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //set up conditionals to check users input to generate appropriate license
  if (license === "MIT") {
    return license = `${ mitLicense }`; 
  } else if (license === "Apache License 2.0") {
     return license = `${ apacheLicense }`;
  } else if (license === "GNU GPLv3") {
    return license = `${ gnuLicense }`;
  } else {
    return "";
  }

}

// Function to generate markdown for README using user response data
function generateMarkdown(answers) {
//Generate table of contents if true dynamically
  let tableOfContents = ` ## Table of Contents`;
  if(answers.installation) {
    tableOfContents += `\n1. [Description](#description)\n`;
  }
  if(answers.installation) {
    tableOfContents += `\n2. [Installation](#installation)\n`;
  }
  if (answers.usage) {
    tableOfContents += `\n3. [Usage](#usage)\n`;
  }
  if(answers.tests) {
    tableOfContents += `\n4. [Tests](#tests)\n`;
  }
  if (answers.contributing) {
    tableOfContents += `\n5. [Contributions](#contributions)\n`;
  }
  if (answers.questions) {
    tableOfContents += `\n6. [Questions](#questions)\n`;
  }

//generate README title and display license badge
  let readMe = `# ${answers.title}\n`;
  readMe += `\n${renderLicenseBadge(answers.license)}\n`

  

 tableOfContents += `\n## Description\n ${answers.description}\n`;
//add Table of Contents to shell and build it up dynamically based off user inputs
 readMe += tableOfContents;
//check if installations is not a string else add inputs
 if (answers.installation != "") {
   readMe += `\n ## Installation\n${answers.installation}\n`
   readMe += `\n [Github Live Site]${answers.githublive}\n`
   readMe += `\n [Github Repo Site]${answers.githubrepo}`
 }
//check and add usage inputs
 if (answers.usage != "") {
   readMe += `\n ## Usage\n ${answers.usage}\n`;
 }
 //check and add installation inputs- run defined functions to generate license badge, link, agreement text and put current year and user's name into license
if (answers.installation != "") {
  readMe += `\n ## License\n ${renderLicenseBadge(answers.license)}\n
   ${renderLicenseLink(answers.license)}\n
    Licensed under the ${answers.license} License\n
    Copyright \u00A9 [${year.getFullYear()}] [${answers.name}]
    ${renderLicenseSection(answers.license)}\n`;
}
//check and add input contributions
if (answers.contributing != "") {
  readMe += `\n ## Contributing\n${answers.contributing}`;
}
//check and add test inputs
if (answers.test === true) {
  readMe += `\n ## Tests \n ${answers.tests}`;
}
//create questions section and add github link and email to it
readMe += `\n ## Questions\n For additional questions about usage, installation or application improvement contact me through\n
Github: ${answers.github}\n
Email: ${answers.email}`;

return readMe;


}
//export generateMarkdown.js to use on index.js
module.exports = generateMarkdown;
