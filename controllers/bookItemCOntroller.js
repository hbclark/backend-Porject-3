const Book = require('../models/book');
//get all books
exports.getAllBookItems = async (req, res) => {
    try {
        const bookItems = await Book.find();
        res.json(bookItems);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    }

exports.getBookItem = async (req, res) => {
    try {
        const bookItem = await Book.findById(req.params.id);
        res.json(bookItem);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}

//create a new book
exports.createBookItem = async (req,res)=>{
    try{
        const newBookItem = new Book(req.body);
        const bookItem = await newBookItem.save();
        res.status(200).json(bookItem);
    }catch(e){
        res.status(400).json({error:e.message});
    }
}
//update a book
exports.updateBookItem=  async(req,res)=>{
    try{
        const updatedBookItem = await Book.findByIdAndUpdate
        (req.params.id,req.body,{new:true});
        res.status(200).json("Book updated successfully");
    }catch(e){
        res.status(400).json({error:e.message});

    }
}
//delete a book
exports.deleteBookItem = async(req,res)=>{
    try{
        await Book.findByIdAndRemove(req.params.id);
        res.status(200).end("Book deleted successfully");
    }
    catch(e){
        res.status(400).json({error:e.message});
    }
}