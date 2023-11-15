const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UsersSchema = new Schema({
    name: String,
    lastname: String,
    username: String,
    password: String
});

const Mymodel = mongoose.model("users", UsersSchema);

// Define the usersModel object directly
const usersModel = {
    // Metodo Guardar - Create
    Guardar: function (post, callback) {
        const instancia = new Mymodel({
            name: post.name,
            lastname: post.lastname,
            username: post.username,
            password: post.password
        });

        instancia.save()
            .then((res) => {
                console.log(res);
                return callback({ state: true, mensaje: "Se almacenó la persona correctamente" });
            })
            .catch((error) => {
                return callback({ state: false, mensaje: "Se presentó un error al almacenar" + error });
            });
    },

    // Metodo Listar - Read
    listar: function (post, callback) {
        return callback(users);
    },

    // Metodo Actualizar - Update
    modificar: function (post, callback) {
        var posicion = users.findIndex((item) => item.codigo == post.codigo);

        if (posicion == -1) {
            callback({ state: false, mensaje: "Este usuario no se encuentra en la base de datos" });
            return false;
        } else {
            users[posicion].name = post.name;
            users[posicion].lastname = post.lastname;
            users[posicion].username = post.username;
            users[posicion].password = post.password;
            callback({ state: true, mensaje: "Tu producto fue actualizado" });
        }
    },

    // Metodo Eliminar - Delete
    eliminar: function (post, callback) {
        // Implementation for delete
    }
};

// Export the usersModel object
module.exports = usersModel;
