const mongoose = require ("../db")

const bookSchema = new mongoose.Schema({
    book_id:String,
    title:String,
    name:String,
    author:String,
    publisher:String,
    language:String,
    category:String,
})

const Book = mongoose.model("Book",bookSchema);

module.exports = Book;