//cargar la libreria para operara la base de datos mongo
const mongo = require ('mongodb').MongoClient;
//configuracion BD
const configBD = require('../configuracion/bd.config');

//asignar cadena de conexion
const url= `mongodb://${configBD.SERVIDOR}: ${configBD.PUERTO}`;

module.exports={
    conectar: function(){
        //conectar al servidor
        mongo.connect(url, function(err, cliente){
            console.log('se ha establecido conexion al servidor de MONGO');
        });
    }
}