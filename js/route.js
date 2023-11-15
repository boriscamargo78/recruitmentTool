// routes.js

// Importa la aplicación desde app.js
var usersController = require("../controller/usersController").usersController;

// Define las rutas u otros middleware según sea necesario
module.exports = function(app) {
    // CREATE --> 01 Api: Crear usuario
    app.post("/users/guardar", usersController.guardar);

    // READ --> 02 Api: Listar usuarios
    app.get("/users/listar", usersController.listar);

    // UPDATE --> 03 Api: Modificar usuarios
    app.post("/users/modificar", usersController.modificar);

    // DELETE --> 04 Api: Eliminar usuarios
    app.post("/users/eliminar", usersController.eliminar);
};