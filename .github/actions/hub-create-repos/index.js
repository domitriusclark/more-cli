const { exec } = require('child_process');
const fs = require("fs")
const util = require('util');

const readdir = util.promisify(fs.readdir);

async function run() {
  try {
    await readdir('./templates', (err, dirs) => {
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
  } catch (error) {
    console.log(error.message)
  }

}

run()