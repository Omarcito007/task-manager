//archivo principal del servidor
// configurar express

const expres = requiere('express');
const cors = require('cors');//permitir conoctar el backent con el frontend
const helmet = requiere('helmet');//seguridad protet

// inializamos la app
const app = express();


//middleware para leer json(APIS)
app.use(express.json());
app.use(cors());
app.use(helmet());



//ruta de prueba
app.use(expres.json());
app.get('/', (req, res)=>{
    res.send('API FUNCIONANDO');

});


module.exports = app;