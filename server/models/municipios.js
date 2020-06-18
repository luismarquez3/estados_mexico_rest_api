const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const db = require('../config/sequelize');
const sequelize = db.conexion();
const Estados =  require('../models/estados');

class Municipios extends Model{}

Municipios.init({
    estado_id:{
        type: Sequelize.INTEGER(),
        references: {
            model: Estados,
            key: 'id'
        }
    },
    clave: {
        type: Sequelize.STRING(2), 
    },
    nombre: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    activo:{
        type: Sequelize.TINYINT(1)
    },
}, {
        sequelize,
        modelName: 'municipios',
        timestamps: false
});

Municipios.associations = () =>{
    Municipios.belongsTo( Estados, {foreignKey: 'estado_id'});
}
module.exports = Municipios;