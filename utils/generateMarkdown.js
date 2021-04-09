//require license.js
const license = require('./license');

//Destructure license object, store in a variable to use
const { mitLicense } = license;
const { apacheLicense } = license;
const { gnuLicense } = license;
let year = new Date();

// const Person = (`${answers.name}`) => {
//   this.fullName = answers.name;
// }
// function Person (name) {
//   this.name = name
// }

// const userName = new Person(`${answers.name}`);


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
//Generate table of contents if true
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

 readMe += tableOfContents;

 if (answers.installation != "") {
   readMe += `\n ## Installation\n${answers.installation}\n`
   readMe += `\n [Github Live Site]${answers.githublive}\n`
   readMe += `\n [Github Repo Site]${answers.githubrepo}`
 }

 if (answers.usage != "") {
   readMe += `\n ## Usage\n ${answers.usage}\n`;
 }
 
if (answers.installation != "") {
  readMe += `\n ## License\n ${renderLicenseBadge(answers.license)}\n
   ${renderLicenseLink(answers.license)}\n
    Licensed under the ${answers.license} License\n
    Copyright \u00A9 [${year.getFullYear()}] [${answers.name}]
    ${renderLicenseSection(answers.license)}\n`;
}

if (answers.contributing != "") {
  readMe += `\n ## Contributing\n${answers.contributing}`;
}

if (answers.test === true) {
  readMe += `\n ## Tests \n ${answers.tests}`;
}

readMe += `\n ## Questions\n For additional questions about usage, installation or application improvement contact me through\n
Github: ${answers.github}\n
Email: ${answers.email}`;

return readMe;




//  if (answers.githublive != "") {
//    readMe += `\n`
//  }









//   return `# ${answers.title}\n
//   ${renderLicenseBadge(answers.license)}


//   ### Table Of Contents\n
//   1. [Description](#description)
//   2. [Installation](#installation)
//   4. [Usage](#usage)
//   5. [Contributions](#contributions)
//   6. [Questions](#questions)

//   ## Description \n
//   ${answers.description}\n
//   ${answers.motivation}\n
//   ${answers.solve}\n
//   ${answers.learn}\n
  
  

  
//  ## Installation\n
//  ${answers.installation}\n
//  [Github Pages Live Site] ${answers.githublive}\n
//  [Github Repo Site] ${answers.githubrepo}
//  ## Usage
//  ${answers.usage}\n
//  ![ScreenShot](${answers.screenshot} "ScreenShot")
 
//  ## License\n
//  ${renderLicenseBadge(answers.license)}\n
//  ${renderLicenseLink(answers.license)}\n
//  Licensed under the ${answers.license} License\n
//  Copyright \u00A9 [${year.getFullYear()}] [${answers.name}]
//  ${renderLicenseSection(answers.license)};
 
 
 

 
 
//  ## Contributing\n
//  ${answers.contributing}\n
 
//  ## Tests\n
//  ${answers.tests}\n
//  ## Questions\n
 
//  Contact me via Github: ${answers.github}\n
//  Contact via Email: ${answers.email}

//   `;
}
//export generateMarkdown.js to use on index.js
module.exports = generateMarkdown;
