const express = require('express')
const Usuarios = require('./users')

function escucha(app){
    const router = express.Router()
    app.use('/api',router)
    const misUsuarios = new Usuarios()

    router.get('/data', async function(req, res, next){
        console.log('recibio peticion get en /api/datos')
        try{
            const users = misUsuarios.getUsuarios({})
            res.status(200).json({
                'usuarios':users            
            })
        }catch(error){
            console(error)
        }
    })
}

module.exports = escucha