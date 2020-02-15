const express = require('express');
const app = express();
//entender peticiones post
const bodyParser = require ('body-parser');
const morgan = require('morgan');

//configuracion del servidor
//pregunto si hay un puerto definido 0 le paso el 3000
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

//routes
require('./routes/userRoutes')(app);


//obtengo el puerto y muestro el mensaje del servidor 
app.listen(app.get('port'), ()=>{
    console.log('servidor on');
    
});





