const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
    brand: String,
    model: String,
    year: String,
    fuel: String,
    gearbox: String,
    price: Number,
    image: String,
});

module.exports = mongoose.model('Car', CarSchema);