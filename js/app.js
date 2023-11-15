var express = require("express")
global.app = express()
var puerto = 3000;

var bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const mongoose = require("mongoose")

const route = require("./route")(app);

mongoose.connect("mongodb://127.0.0.1:27017/applicance",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((res) => {
    console.log("Conexion correcta a Mongo")
}).catch((error) => {
    console.log(error)
})

// Exporta la aplicación
module.exports = app;

app.use("/", express.static(__dirname + "/Pagina"))

app.listen(puerto, function() {
    console.log("servidor funcionando por el puerto" + puerto)
})