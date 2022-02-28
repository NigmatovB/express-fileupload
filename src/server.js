const express = require('express')
const os = require('os')
const fileupload = require('express-fileupload')
const { join } = require('path')

const app = express()
app.use( fileupload() )
app.use( express.json() )

// const host = os.networkInterfaces().en0[1].address || 'localhost'
const PORT = process.env.PORT || 4004

const image = require('./router/image')
app.use( '/image', express.static( join( process.cwd(), 'src', 'image' ) ) )

app.use( '/', image )

// app.listen( PORT, ( ) => console.log( 'http://' + host + ':' + PORT ))
app.listen( PORT )