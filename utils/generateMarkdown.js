// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  // if (license === "MIT") {
  //   license = `https://img.shields.io/apm/l/pack`
  // } else if (license === "GNU GPLv3") {
  //   license `https://img.shields.io/aur/license/pa`
  // } else if (license === "Apache License 2.0"){
  //   license = `https://img.shields.io/aur/license/android-studio`
  // } 
  // else {
  //   return "No License selected"
  // }
  // renderLicenseLink(license)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // const mit = 'Licensed under [MIT License](https://spdx.org/licenses/MIT.html)';
  // const apache = 'Licensed under [Apache License](https://spdx.org/licenses/MIT.html)';
  // const  gnu = 'Licensed under [GNU License](https://spdx.org/licenses/GPL-3.0-or-later.html)';
 if (license === "MIT") {
  return license = `\r[![License MIT](https://img.shields.io/apm/l/pack)](https://spdx.org/licenses/MIT.html)`;
 } else if (license === "Apache License 20") {
  license = apache;
 } else if (license === "GNU GPLv3") {
  license = gnu;
 } else {
   return " ";
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
 ${renderLicenseBadge}
 ${renderLicenseLink(answers.license)}\n
 ${renderLicenseSection}
 
 
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
