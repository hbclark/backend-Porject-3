const mongoose = require ("../db")

const orderSchema = new mongoose.Schema({
    OrderNo: { type: Number, alias: 'OrderNo.' },
    OrderDate: String,
    CustNo: Number,
    ProductCode: { type: Number, alias: 'Product Code' },
    ProductName: { type: String, alias: 'Product Name' },
    ProductQuantity: { type: Number, alias: 'Product Quantity' },
    Total: { type: Number },
    ModeOfPayment: { type: String, alias: 'Modeof Payment' }

})

const Order = mongoose.model("Order",orderSchema);

module.exports = Order;