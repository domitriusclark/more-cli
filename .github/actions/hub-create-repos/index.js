const { exec } = require('child_process');
const fs = require("fs")
const util = require("util")

const readdir = util.promisify(fs.readdir);
const pExec = util.promisify(exec)

async function run() {
  await readdir('./templates', (err, dirs) => {
    if (err) {
      console.log(err)
    } else {
      for (let dir of dirs) {
        return await pExec(`hub create domitriusclark/${dir}`)
      }
    }
  })
}
run()