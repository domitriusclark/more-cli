const { exec } = require('child_process');
const fs = require("fs")
const util = require('util');

const readdir = util.promisify(fs.readdir);

async function run() {
  try {
    const dirs = await readdir(process.env.GITHUB_WORKSPACE + '/templates')
    for (let dir of dirs) {
      exec(`gh repo create ${dir}`)
    }
  } catch (error) {
    console.log(error.message)
  }
}

run()