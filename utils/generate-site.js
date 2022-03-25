// import fs into the file
const fs = require('fs');

// function that writes a file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and send it to the .catch() method
            if (err) {
                reject(err);
                // return out of the function to stop execution
                return;
            }

            // if everything went well, resolve the Promise and send the data to the .then() method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};