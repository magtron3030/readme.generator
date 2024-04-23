const fs = require('fs')
const {generateMarkdown} = require("./generateMarkdown")


function makeLog(fileName, contents) {
   fs.writeFile(fileName, generateMarkdown(contents), (err) => {
      if ( err ) console.log(err)
   })
}




module.exports = {makeLog}