const rw = require('../middleware/readWrite')
const { join } = require('path')

const validat = async ( inf , name ) => {
    let data = rw.read( name )
    if( inf.length == 2 ){
        for(let i of inf ){
            let date = Date.now()
           let val = {
                id: Date.now(),
                name:  i.name,
                size: parseInt(i.size / 1024 ) + 'kb',
                path:`/${name}/`+ date + '--' + i.name 
            }
            i.mv( join( process.cwd(), 'src', name + '/' ) + date + '--' + i.name )
            data.push(val)
        }
        rw.write( data , name )
    } else {
        let date = Date.now()
        let val = {
            id: Date.now(),
            name:  inf.name,
            size: parseInt(inf.size / 1024 ) + 'kb',
            path: `/${name}/` + date + '--' + inf.name 
        }
        console.log(val.path);
        data.push(val)
        rw.write( data , name )

        inf.mv( join( process.cwd(), 'src' , name  + '/' )+ date + '--' + inf.name )
    }
}

module.exports = validat