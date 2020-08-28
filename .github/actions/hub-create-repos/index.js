const { exec } = require('child_process');
const fs = require("fs")
const util = require('util');

const readdir = util.promisify(fs.readdir);


async function run() {
  try {
    await readdir('./templates', (err, dirs) => {
      console.log(dirs);
      if (err) {
        console.log("An error happened inside readdir");
        console.log(err)
      } else {
        console.log("No error inside readdir");
        for (let dir of dirs) {
          return exec(`gh repo create ${dir}`)
        }
      }
    })
  } catch (error) {
    console.log(error.message)
  }
}

run()