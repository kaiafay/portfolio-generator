// allow access to inquirer package
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));
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