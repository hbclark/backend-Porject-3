const mongoose = require ("../db")

const productSchema = new mongoose.Schema({
    ProductCode:Number,
    ProductName:String,
    ProductQuantity:Number,
    Product_price:Number
})

const Product = mongoose.model("Product",productSchema);

module.exports = Product;