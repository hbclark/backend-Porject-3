const Order = require('../models/order');
//get all orders
exports.getAllOrderItems = async (req, res) => {
    try {
        const orderItems = await Order.find();
        res.json(orderItems);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    }

    //get a single order
exports.getOrderItem = async (req, res) => {
    try {
        const orderItem = await Order.findById(req.params.id);
        res.json(orderItem);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}

//create a new order
exports.createOrderItem = async (req,res)=>{
    try{
        const newOrderItem = new Order(req.body);
        const orderItem = await newOrderItem.save();
        res.status(200).json(bookItem);
    }catch(e){
        res.status(400).json({error:e.message});
    }
}
//update a order
exports.updateOrderItem=  async(req,res)=>{
    try{
        const updatedOrderItem = await Order.findByIdAndUpdate
        (req.params.id,req.body,{new:true});
        res.status(200).json("Order updated successfully");
    }catch(e){
        res.status(400).json({error:e.message});

    }
}
//delete an order
exports.deleteOrderItem = async(req,res)=>{
    try{
        await Order.findByIdAndRemove(req.params.id);
        res.status(200).end("Order deleted successfully");
    }
    catch(e){
        res.status(400).json({error:e.message});
    }
}