const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const db = require('../config/sequelize');
const sequelize = db.conexion();
const Municipios = require('../models/municipios');
class Localidades extends Model{}

Localidades.init({
    municipio_id:{
        type: Sequelize.INTEGER(),
        references: {
            model: Municipios,
            key: 'id'
        }
    },
    nombre: {
        type: Sequelize.STRING(100),
    },
}, {
        sequelize,
        modelName: 'localidades',
        timestamps: false
});

Localidades.associations = () =>{
    Localidades.belongsTo( Municipios, {foreignKey: 'estado_id'});
}
module.exports = Localidades;