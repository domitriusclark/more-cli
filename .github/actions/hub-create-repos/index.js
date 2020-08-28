const { exec } = require('child_process');
const fs = require("fs")

function run() {
  return fs.readdir('./templates', (err, dirs) => {
    if (err) {
      console.log(err)
    } else {
      for (let dir of dirs) {
        return exec(`hub create domitriusclark/${dir}`, (error, stdout, stderr) => {
          if (error) {
            console.error(`exec error: ${error}`);
            return;
          }
          console.error(`stderr: ${stderr}`);
          console.log(`stdout: ${stdout}`);

          return dirs
        });
      }
    }
  })
}

run()