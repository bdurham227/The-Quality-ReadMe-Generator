// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  

}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}\n

  ###Table Of Contents\n
  1. [Description](#desc)
  2. [Navigation](#nav)
  3. [Contributions](#contrib)


  ##Description \n
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
 ${answers.license}\n
 
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
