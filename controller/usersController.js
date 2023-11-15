//El controlador es el encargado de validar

var usersModel = require("../models/usersModel.js").usersModel;
var usersController = {}

//Metodo Guardar - Create
usersController.guardar = function(request, response){

        try {     
            var post = {
                name:request.body.name,
                lastname:request.body.lastname,
                username:request.body.username,
                password:request.body.password
            }

            if (post.name == undefined || post.name == null || post.name == "") {
                response.json({ state: false, mensaje:"Este campo es obligatorio" })
                return false
            }

            if (post.lastname == undefined || post.lastname == null || post.lastname == "") {
                response.json({ state: false, mensaje:"Este campo es obligatorio" })
                return false
            }

            if (post.username == undefined || post.username == null || post.username == "") {
                response.json({ state: false, mensaje:"Este campo es obligatorio" })
                return false
            }

            if (post.password == undefined || post.password == null || post.password == "") {
                response.json({ state: false, mensaje:"Este campo es obligatorio" })
                return false
            }

usersModel.guardar(post,function(respuesta){
                response.json(respuesta)
               })
            
                } catch (error) {
                    console.error(error);
                    response.json({sate:false, mensaje:"error inesperado", error: error})
                }
            
            }

//Metodo Leer - Read
usersController.listar = function(request, response) {
    productoModel.listar(null,function(respuesta){
        response.json(respuesta)
    })


}

//Metodo Modificar - Update
usersController.modificar = function(request, response) {
    
    var post = {
        name:request.body.name,
        lastname:request.body.lastname,
        username:request.body.username,
        password:request.body.password
    };

    if (post.name == undefined || post.name == null || post.name == "") {
    response.json({ state: false, mensaje:"Este campo es obligatorio" })
    return false
    }

    if (post.lastname == undefined || post.lastname == null || post.lastname == "") {
        response.json({ state: false, mensaje:"Este campo es obligatorio" })
        return false
    }

    if (post.username == undefined || post.username == null || post.username == "") {
        response.json({ state: false, mensaje:"Este campo es obligatorio" })
        return false
    }

     if (post.password == undefined || post.password == null || post.password == "") {
        response.json({ state: false, mensaje:"Este campo es obligatorio" })
        return false
    }

    usersModel.modificar(post,function(respuesta) {
        response.json(respuesta)
    })
    
}
 
//Metodo Eliminar - Delete
usersController.eliminar = function(request, response) {

    var post = {
        username:request.body.username
    };

    
    if (post.username == undefined || post.username == null || post.username == "") {
        response.json({ state: false, mensaje:"Este campo es obligatorio" });
        return;
    }

    usersModel.eliminar(post,function(respuesta) {
        response.json(respuesta);        
    })    

}

module.exports.usersController = usersController;