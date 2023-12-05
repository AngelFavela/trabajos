const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VentaSchema = new Schema({
    producto: String,
    precio: String,
    iva: String
});

const CuentaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
}, {
    versionKey: false
});

const VentaModel = mongoose.model('Venta', VentaSchema, 'datos');
const CuentaModel = mongoose.model('Cuenta', CuentaSchema, 'cuentas');

module.exports = {
    VentaModel,
    CuentaModel
};
