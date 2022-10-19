const fs = require('fs')

const write = function(data='nothing') {
    fs.writeFileSync('Note.txt', data)
}

module.exports = write