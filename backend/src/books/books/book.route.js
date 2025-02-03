const express = require('express');

const router = express.Router();
const {postABook, getAllBooks, getSingleBook, updateBook, deleteBook} = require('./book.controller');
const verifyAdmin = require('../middleware/verifyAdmin');
//post when we have to submit something to front end to db
//get when we are getting something from database
//put/patch - edit or update the data
//delete - delete something from db

//frontend => backend server => controller => bookSchema (valid) => database => sent to the db => frontend

router.post("/create-book", verifyAdmin,postABook)
//get all books

router.get("/", getAllBooks)
router.get("/:id", getSingleBook)
router.put("/edit/:id",verifyAdmin, updateBook)
router.delete("/:id",verifyAdmin, deleteBook)
module.exports = router; 