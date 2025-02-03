const express = require('express')
const router = express.Router();
const User = require('./users.model')
const jwt = require('jsonwebtoken')

const jwt_key = process.env.jwt_secret
router.post("/admin", async(req, res) => {
    const {username, password} = req.body

    try{
        const admin = await User.findOne({username})
        if (!admin){
            res.status(404).send({message: "Not correct username"})
        }
        if (admin.password!==password){
            res.status(401).send({message: "Invalid credential"})
        }

        const token = jwt.sign({id: admin._id, username: admin.username, role: admin.role}, 
            jwt_key,
            {expiresIn: '1h'}
        )

        return res.status(200).send({
            message: "authentication successful",
            token: token, 
            user: {
                username: admin.username,
                role: admin.role
            }})
    }catch(err){
        console.error("Failed to login as admin", err)
        res.status(400).send({message: "Failed login attempt as admin"});
    }

})
module.exports = router;