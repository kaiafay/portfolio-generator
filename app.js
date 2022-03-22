// allow access to fs module
const fs = require('fs');
// includes the generatePage function from another js file
const generatePage = require('./src/page-template.js');

// skips over the file pathway info
const profileDataArgs = process.argv.slice(2);
// declares the first two array values as name and github variables
const [name, github] = profileDataArgs;

// writes the file using the fs module
fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log("Porfolio complete! Check out index.html to see the output!");
});