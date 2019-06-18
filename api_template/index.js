/* ============== Dependencias ============== */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

/* ============== Instancia de servidor ============== */
const app = express();

/* ============== Middlewares ============== */  
app.use(morgan('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());
// Configuracion Cors ()
app.use(cors());
/* Configuracion (sin modulo npm) 
    app.use( function(req, res, next) {
        res.header('Access-Control-Allow-Origin','*');
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });
*/

/* ============== Puerto ============== */
app.set('port', 3030);
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

/* ============== Rutas gestionadas ==============*/ 
require('./server/services/ejemplo/ejemplo.route')(app);