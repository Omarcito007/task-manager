//Conexion a base de datos
//importamos sequelize
const { Sequelize } = require('sequelize');

//crear conexion a mysql
const sequelize = new Sequelize('taskmanager','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

//probar conexion
sequelize.authenticate()
.then(() =>console.log('Conexion exitosa'))
.catch(err =>console.error('Fallo la conexion',err));

module.exports = sequelize;
