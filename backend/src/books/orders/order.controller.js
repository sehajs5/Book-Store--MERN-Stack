const Order = require("./order.model")

const bookOrder= async(req, res)=> {
    try {
        const newOrder =  await Order(req.body);
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
      } catch (error) {
        console.error("Error creating order", error);
        res.status(500).json({ message: "Failed to create order" });
      }
}

const getOrderByEmail = async(req, res) => {
    try{
      const {email} = req.params
        const orders = await Order.find({email}).sort({createrdAt: -1})
        if (!orders){
          return res.status(404).json({message: "Order not found"})
        }
        res.status(200).json(orders)
    }catch(error){
        console.log("Error Retrieving all the orders", error);
        res.status(500).send({message: "No orders retrieved: failed"})
    }
}

// const getSingleOrder = async(req, res)=>{
//     try{
//         const {id} = req.params
//         const order = await Order.findById(id)
//         if (!order){
//             res.status(404).send({message: "Order not found"})
//         }
//         res.status(200).send(order)
//     }catch(error){
//         console.log("Error Retrieving order", error);
//         res.status(500).send({message: "No Order retrieved: failed"})
//     }
// }


// const deleteOrder= async(req,res) => {
//     try{
//         const {id} = req.params
//         const deletedOrder = await Book.findByIdAndDelete(id)
//         if (!deletedOrder){
//             res.status(404).send({message: "order not found"})
//         }
//         res.status(200).send({message: "Order Cancelked", deletedOrder})
//     }catch(error){
//         console.log("Error Deleting", error);
//         res.status(500).send({message: "No order deleted: failed"})
//     }
// }
module.exports = {bookOrder, getOrderByEmail}