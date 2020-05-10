const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let model = new Schema({
    status: { type: Number, default: 1, required: true }
}, { timestamps: true })

module.exports = mongoose.model("model", model);