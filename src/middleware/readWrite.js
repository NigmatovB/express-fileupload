const fs = require('fs')
const { join } = require('path')

const parser = {
    read: ( file ) => {
        return JSON.parse(fs.readFileSync( join( process.cwd(), 'src', 'data', `${file}.json` ),'utf-8' ))
    },
    write: ( val, file ) => {
        val = JSON.stringify( val, null, 4 )
        return fs.writeFileSync( join( process.cwd(), 'src', 'data', `${file}.json` ), val )
    }
}

module.exports = parser