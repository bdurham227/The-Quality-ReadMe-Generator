// TODO: Create a function that returns a license badge based on which license is passed in
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // const mit = 'Licensed under [MIT License](https://spdx.org/licenses/MIT.html)';
  // const apache = 'Licensed under [Apache License](https://spdx.org/licenses/MIT.html)';
  // const  gnu = 'Licensed under [GNU License](https://spdx.org/licenses/GPL-3.0-or-later.html)';
//  if (license === "MIT") {
//   return license = `\r[![License MIT](https://img.shields.io/apm/l/pack)](https://spdx.org/licenses/MIT.html)`;
//  } else if (license === "Apache License 2.0") {
//   return license = `\r[![License Apache License 2.0](https://img.shields.io/aur/license/android-studio)](https://spdx.org/licenses/Apache-2.0.html)`;
//  } else if (license === "GNU GPLv3") {
//   return license = `\r[![License GNU GPLv3](https://img.shields.io/aur/license/pa)](https://spdx.org/licenses/GPL-3.0-or-later.html)`;
//  } else {
//    return " ";
//  }

if (license === "MIT"){
  return license = `https://opensource.org/licenses/MIT`
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


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers, license) {
  
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

 
 
 ## Contributing\n
 ${answers.contributing}\n
 ## Tests\n
 ${answers.tests}\n
 ## Questions\n
 
 My github: ${answers.github}\n
 my Email: ${answers.email}

  `;
}

module.exports = generateMarkdown;
