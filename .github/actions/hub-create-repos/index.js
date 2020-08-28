const { exec } = require('child_process');
const fs = require("fs")


function run() {
  await fs.readdir('./templates', (err, dirs) => {
    console.log("top level", dirs)
    if (err) {
      console.log("in the if error")
      console.log(err)
    } else {
      for (let dir of dirs) {
        console.log("in the for loop", dir)
        return exec(`hub create domitriusclark/${dir}`)
      }
    }
  })
}

run()