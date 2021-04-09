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
  // const userName = new Person(`${answers.name}`);
  
  return `# ${answers.title}\n
  [!Contributer Covenant]()


  ### Table Of Contents\n
  1. [Description](#description)
  2. [Installation](#installation)
  4. [Usage](#usage)
  5. [Contributions](#contributions)
  6. [Questions](#questions)

  ## Description \n
  ${answers.description}\n
  ${answers.motivation}\n
  ${answers.solve}\n
  ${answers.learn}\n
  
  

  
 ## Installation\n
 ${answers.installation}\n
 [Github Pages Live Site] ${answers.githublive}\n
 [Github Repo Site] ${answers.githubrepo}
 ## Usage
 ${answers.usage}\n
 ![ScreenShot](${answers.screenshot} "ScreenShot")
 
 ## License\n
 ${renderLicenseBadge(answers.license)}\n
 ${renderLicenseLink(answers.license)}\n
 Licensed under the ${answers.license} License\n
 Copyright \u00A9 [${year.getFullYear()}] [${answers.name}]
 ${renderLicenseSection(answers.license)};
 
 
 

 
 
 ## Contributing\n
 ${answers.contributing}\n
 
 ## Tests\n
 ${answers.tests}\n
 ## Questions\n
 
 My github: ${answers.github}\n
 my Email: ${answers.email}

  `;
}
//export generateMarkdown.js to use on index.js
module.exports = generateMarkdown;
