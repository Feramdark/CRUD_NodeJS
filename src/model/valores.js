/*Con esto se construye un modelo de los datos que debe de enviar,
el modelo de nuestro documento */
const mongo = require("mongoose");

const pacientSchema = new mongo.Schema(
  {
    nombre: {type: String, default: "NULL"},
    valores: {type:String, default: "NULL"},
    fecha: {type:Date, default: Date.now}
  });

const pacient = mongo.model("heart_values", pacientSchema);

module.exports = pacient; 