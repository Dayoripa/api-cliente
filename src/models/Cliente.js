const { Schema, model } = require("mongoose");

const clienteSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    } 
});

module.exports = model ("Cliente", clienteSchema );