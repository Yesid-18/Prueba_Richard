const mongoose = require('mongoose');

const NotaSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    titulo:{
        type: String,
        required: true
    },
    contenido:{
        type: String,
        required: true
    },
    fecha:{
        type: Date,
        default: Date.now()
    },


});

module.exports = mongoose.model('Nota', NotaSchema)