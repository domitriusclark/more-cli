const { exec } = require('child_process');
const fs = require("fs")
const path = require("path");

const directoryPath = path.join(__dirname, '../../../templates');

fs.readdir(directoryPath, (err, dirs) => {
  if (err) {
    console.log(err)
  } else {
    for (let dir of dirs) {
      exec(`hub create domitriusclark/${dir}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.error(`stderr: ${stderr}`);
        console.log(`stdout: ${stdout}`);
      });
    }
  }
})


