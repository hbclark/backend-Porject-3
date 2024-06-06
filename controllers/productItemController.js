const Product = require('../models/product');
//get all products
exports.getAllProductItems = async (req, res) => {
    try {
        const productItems = await Product.find();
        res.json(productItems);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    }

exports.getProductItem = async (req, res) => {
    try {
        const productItem = await Product.findById(+req.params.id);
        res.json(productItem);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}

//create a new product
exports.createProductItem = async (req,res)=>{
    try{
        const newProductItem = new Product(req.body);
        const productItem = await newProductItem.save();
        res.status(200).json(productItem);
    }catch(e){
        res.status(400).json({error:e.message});
    }
}
//update a product
exports.updateProductItem=  async(req,res)=>{
    try{
        const updatedProductItem = await Product.findByIdAndUpdate
        (req.params.id,req.body,{new:true});
        res.status(200).json("product updated successfully");
    }catch(e){
        res.status(400).json({error:e.message});

    }
}
//delete a product
exports.deleteProductItem = async(req,res)=>{
    try{
        await Product.findByIdAndRemove(req.params.id);
        res.status(200).end("product deleted successfully");
    }
    catch(e){
        res.status(400).json({error:e.message});
    }
}