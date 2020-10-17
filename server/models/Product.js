const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    image: {
        type: String, 
        required: true,
        unique: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: String, 
        required: true,
    },
    category: {
        type: String,
    },
    inStock: {
        type: Number,
        default: 0,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})

const product = mongoose.model('Product', productSchema)

module.exports = product