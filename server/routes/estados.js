const express = require('express');
const app = express();


const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const db = require('../config/sequelize');
const sequelize = db.conexion();

const Estados = require('../models/estados');
const Municipios = require('../models/municipios');
const Localidades = require('../models/locallidades');


app.get('/api_estados/estados', (req, res) => {

        Estados.findAll().then(estados => {
            return res.status(200).json({
                estados
            })
        }).catch(err => {
            return res.status(500).json({
                err,
                message: "Hay un problema con la base de datos"
            })
        })
});

app.get('/api_estados/municipios/:id', (req, res)=>{

    Municipios.findAll({
        where: { estado_id: req.params.id },
    }).then(municipios =>{
        res.status(200).json({
            municipios
        });
    })
});
app.get('/api_estados/municipios_estado/:nombre', (req, res)=>{
    let nombre = req.params.nombre;
    Estados.findAll({
        include: [{
            model: Municipios,
    }],
        where: { nombre: nombre},
    }).then(municipios =>{
        res.status(200).json({
            municipios: municipios[0].municipios
        });
    })
});

app.get('/api_estados/localidades/:id', (req, res)=>{
     Localidades.findAll({
         where: { municipio_id: req.params.id}
     }).then(localidades=>{
         res.status(200).json({
             localidades
         })
     }).catch(err=>{
         return res.status(500).json({
             err
         })
     })
})


app.get('/api_estados/estados/localidades/:nombre', (req, res)=>{
    let nombre = req.params.nombre;
    let qry = 'SELECT localidades.id, localidades.nombre FROM localidades JOIN municipios ON municipios.id=localidades.municipio_id JOIN estados ON estados.id=municipios.estado_id WHERE estados.nombre = ?'
    sequelize.query(qry, 
    {
        replacements:[nombre], 
        type:Sequelize.QueryTypes.SELECT}).then(data=>{
        res.status(200).json({
            data
        })
    })
});

module.exports = app;