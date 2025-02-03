const express = require('express');

const router = express.Router();
const {bookOrder, getOrderByEmail } = require('./order.controller')


//frontend => backend server => controller => bookSchema (valid) => database => sent to the db => frontend

router.post("/", bookOrder)

router.get("/email/:email", getOrderByEmail)
module.exports = router; 