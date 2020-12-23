const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    idade: {
        type: Number,
        required: true
    },
    convenio: {
        type: String,
        required: true
    },
    salario: {
        type: Number,
        required: true
    },
    motivo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Client', ClientSchema);