const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const db = require('../config/sequelize');
const sequelize = db.conexion();
const Municipios = require('../models/municipios');
class Estados extends Model{}

Estados.init({
    clave: {
        type: Sequelize.STRING(2), 
    },
    nombre: {
        type: Sequelize.STRING(40),
        allowNull: false,
    },
    abrev: { 
        type: Sequelize.STRING(10),
    },
    activo:{
        type: Sequelize.TINYINT(1)
    },
}, {
        sequelize,
        modelName: 'estados',
        timestamps: false
});

Estados.hasMany( Municipios, { foreignKey: 'estado_id'});
module.exports = Estados;