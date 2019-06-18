//Modelo Requerido
//crear constantes inicializadas a los modelos
const ejemplo = require('./ejemplo.model');

module.exports = function (app) {

    // Se cambia ruta_del_modelo por el nombre de la ruta que se usara
    // Se debe usar la misma ruta para todos los tipos de peticiones
    // Se reciben los parametros a traves de query para get y delete
    // se reciben los parametros a traves de body para post y put
    app.get('/api/ejemplo', (req, res) => {

        /* Recibir datos de la peticion
        Se cambia el nombre de las variables por el que queremos usar
        en las consultas y en re.query.var se cambia var por el nombre
        del parametro que se espera recibir desde el cliente
        */ 
        let parametros = {
            var1: req.query.var1,
            var2: req.query.var2
        }

        // Se llama al modelo y se pasan los datos
        // se envia la data y se recibe el error y el callback
        // Hay que cambiar el nombre de la funcion por el que esta en el modelo
        ejemplo.obtenerEjemplos(parametros, (error, respuesta) => {
            // Se lee si hubo un error
            if (error) {
                // Enviamos un json con estado en false y el mensaje de error
                res.status(500).json({
                    sucess: false,
                    codigo: error.errno,
                    mensaje: `${error.code} ${error.sqlMessage}`
                }); 
            } else {
                // Envialos una respuesta con estado 200
                // enviamos el callback recibido desde el modelo
                res.status(200).json({sucess: true, data: respuesta});
            }
        });
    });

    app.post('/api/ejemplo', (req, res) => {

        /* Recibir datos de la peticion
        Se cambia el nombre de las variables por el que queremos usar
        en las consultas y en re.body.var se cambia var por el nombre
        del parametro que se espera recibir desde el cliente
        */ 
        const datos = {
            var1: req.body.var1,
            var2: req.body.var2
        }

        // Se llama al modelo y se pasan los datos
        // se envia la data y se recibe el error y el callback
        // Hay que cambiar el nombre de la funcion por el que esta en el modelo
        ejemplo.funcionPost( datos, (error, respuesta) => {
            // Se lee si hubo un error
            if (error) {
                // Enviamos un json con estado en false y el mensaje de error
                res.status(500).json({
                    sucess: false,
                    codigo: error.errno,
                    mensaje: `${error.code} ${error.sqlMessage}`
                }); 
            } else {
                // Envialos una respuesta con estado 200
                // enviamos el callback recibido desde el modelo
                res.status(200).json(respuesta);
            }
        })
    });

    app.put('/api/ejemplo', (req, res) => {

        /* Recibir datos de la peticion
        Se cambia el nombre de las variables por el que queremos usar
        en las consultas y en re.body.var se cambia var por el nombre
        del parametro que se espera recibir desde el cliente
        */ 
        const datos = {
            var1: req.body.var1,
            var2: req.body.var2
        }

        // Se llama al modelo y se pasan los datos
        // se envia la data y se recibe el error y el callback
        // Hay que cambiar el nombre de la funcion por el que esta en el modelo
        ejemplo.funcionPut( datos, (error, respuesta) => {
            // Se lee si hubo un error
            if (error) {
                // Enviamos un json con estado en false y el mensaje de error
                res.status(500).json({
                    sucess: false,
                    codigo: error.errno,
                    mensaje: `${error.code} ${error.sqlMessage}`
                }); 
            } else {
                // Envialos una respuesta con estado 200
                // enviamos el callback recibido desde el modelo
                res.status(200).json(respuesta);
            }
        })
    });

}