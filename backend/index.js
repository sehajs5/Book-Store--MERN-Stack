const express = require('express')
const app = express()
const port = process.env.PORT || 7777;
const cors = require("cors")
const mongoose = require('mongoose');
//dotenv- to protect the environment

require('dotenv').config()

app.use(express.json());
app.use(cors());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))
const bookRoutes = require('./src/books/book.route')
app.use("/api/books", bookRoutes)
async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.use('/', (req, res)=> {
        res.send("Welcome to my server");
    })
 
}  
main().then(()=> console.log("Aye Aye from MongoDB")).catch(err => console.log(err));
app.listen(port, ()=> {
    console.log(`Port is listening on ${port}`)
})