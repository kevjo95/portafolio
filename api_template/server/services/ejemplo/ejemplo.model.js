// Se importa la conexion
const conexion = require('../../../conexion');

// cambiar nombre del arreglo de funciones
// debe llevar Model al final por estandar
let ejemploModel = {};

/* 
funciones del modelo
no se controla el tipo de peticion
debe denotarse en el nombre de la funcion
Se reciben dos parametros
el primero es la data recibida, si no se recibe data se puede omitir
el segundo es el callback o respuesta de la consulta
*/
ejemploModel.obtenerEjemplos = (data, callback) => {

    // Se verifica que exista la coneccion
    if (conexion) {

        // se crea la consulta
        const consulta = `SELECT NOW()`;

        // Ejemplo de consulta con paso de parametros
        const consultaParametros = 
        `SELECT NOW(), ${data.var1}, ${data.var2}`;
        // console.log(data);
        

        let query = data.var1 != undefined && data.var2 != undefined ? consulta : consultaParametros;

        
        /*
         Se llama al metodo de ejecucion de consulta
         y se pasa la consulta y se reciben dos parametros
         (param1, param2) donde estos son el error y el resultado
         en caso de exito, los nombres de los parametros pueden ser los
         que deseen
         */

        conexion.query(
            query,
            (error, respuesta) => {
                if (error) {
                    /* 
                    En este caso solo se maneja el error
                    mostrando el obj error en consola y retorna info
                    */
                    
                    // console.log("============================= [ Error log] =============================");
                    // console.log(error);
                    // console.log("=========================================================================");
                   callback(error, null);
                } else {
                    /*
                     Como fue exitoso se hace callback y se retorna
                     un error nulo y la respuesta es la consulta
                    */

                    // console.log("Se realizo la consulta");
                    callback(null, respuesta);
                }

            }

        )

    }

};

/*
 exportamos todo el arreglo de funciones para que
  sean accesibles por el route o modelo donde sea 
  llamado o requerido
*/
module.exports = ejemploModel;