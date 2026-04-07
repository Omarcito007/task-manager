const User = require('./models/users');
const Task = require('./models/task');

//un usuario tiene muchas tareas
User.hasMany(Task);
//una tarea pertenece a un usuario
Task.belongsTo(User);

GPUShaderModule.exports = {User,Task};