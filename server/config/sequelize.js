const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
module.exports={

conexion: function(){
    const sequelize = new Sequelize(
        process.env.DB_DATABASE,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    });
    return sequelize;
}
}