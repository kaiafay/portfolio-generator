// allow access to inquirer package
const inquirer = require('inquirer');

// arrow function that prompts user for info
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log('Please enter your name!');
              return false;
          }
      }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Username. (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your Github username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:'
    }
  ]);
};

// arrow function that prompts user to add a new project
const promptProject = portfolioData => {
    console.log(`
    =================
    Add a New Project
    =================
    `);

     // if there's no projects array property, create one
     if(!portfolioData.projects) {
        portfolioData.projects = [];
    };

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the Github link to your project. (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Please enter the link to your Github project!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
          return promptProject(portfolioData);
        } else {
          return portfolioData;
        }
      });
};

// store and console.log answers
promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });
    
// // allow access to fs module
// const fs = require('fs');
// // includes the generatePage function from another js file
// const generatePage = require('./src/page-template.js');

// // set function to a variable
// const pageHTML = generatePage(name, github);

// // writes the file using the fs module
// fs.writeFile('index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log("Porfolio complete! Check out index.html to see the output!");
// });