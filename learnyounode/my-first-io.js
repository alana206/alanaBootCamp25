const fs = require('fs')
fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  const lines = data.split('\n').length - 1
  console.log(lines)
})


// const fs = require('fs')
// const data = fs.readFileSync(process.argv[2], 'utf8')
// const lines = data.split('\n').length - 1
// console.log(lines)