const Book = require("./bookmodel")

const postABook= async(req, res)=> {
    try{
        const newBook= await Book({...req.body})
        await newBook.save()
        res.status(200).send({mesage: "Book Posted successfully", book: newBook})
    }catch(error){
        console.error("Error creating book", error); 
        res.status(500).send({message: "Failed to create a book"})
    }
}

const getAllBooks = async(req, res) => {
    try{
        const books = await Book.find().sort({createdAt: -1})
        res.status(200).send({message: "Books retrieved successfully", books})
    }catch(error){
        console.log("Error Retrieving all the books", error);
        res.status(500).send({message: "No books retrieved: failed"})
    }
}

const getSingleBook = async(req, res)=>{
    try{
        const {id} = req.params
        const book = await Book.findById(id)
        if (!book){
            res.status(404).send({message: "Book not found"})
        }
        res.status(200).send(book)
    }catch(error){
        console.log("Error Retrieving one book", error);
        res.status(500).send({message: "No book retrieved: failed"})
    }
}

const updateBook = async(req, res) => {
    try{
        const {id} = req.params
        const update = await Book.findByIdAndUpdate(id, req.body, {new: true})
        if (!update){
            res.status(404).send({message: "Book not found"})
        }
        res.status(200).send({
            message: "Book updated",
            update
        })
    }catch(error){
        console.log("Error Updating one book", error);
        res.status(500).send({message: "No book updated: failed"})
    }
}

const deleteBook= async(req,res) => {
    try{
        const {id} = req.params
        const deletedBook = await Book.findByIdAndDelete(id)
        if (!deletedBook){
            res.status(404).send({message: "Book not found"})
        }
        res.status(200).send({message: "Book deleted", deletedBook})
    }catch(error){
        console.log("Error Deleting one book", error);
        res.status(500).send({message: "No book deleted: failed"})
    }
}
module.exports = {postABook, getAllBooks, getSingleBook, updateBook, deleteBook}