const express = require('express')
const router = express.Router()
const vr = require('../middleware/validator')
const rw = require('../middleware/readWrite')


router.get( '/', async ( req, res ) => {
    let val = await rw.read( 'image' )
    res.send( val )
} )

router.post( '/', async ( req, res ) => {
    let val = await vr( req.files.image, 'image' )
    res.send( " Data edded" )
} )

router.put( '/', async ( req, res ) => {
    let val = await vr( {

    }, 'image' )
    res.send( " Data edded" )
} )

module.exports = router