const express = require('express')

function escucha(app){
    const router = express.Router()
    app.use('/api',router)

    router.get('/data', async function(req, res, next){
        console.log('recibio peticion get en /api/datos')
        try{
            res.status(200).json({
                'nombre':'Jose Angel Torres Rangel',
                'telefono':'3319060224',
                'email':'jose.tr@tlajomulco.tecnm.mx'
            })
        }catch(error){
            console(error)
        }
    })
}

module.exports = escucha