const {DataTypes} = require('sequelize');
const sequelize = require('./confing/database');

//definir tabla tareas
const Task = sequelize.define('Task',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },   
    descripcion:{
        type: DataTypes.STRING,
        allowNull: false
    },
     completed:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
  
    });
module.exports = Task;