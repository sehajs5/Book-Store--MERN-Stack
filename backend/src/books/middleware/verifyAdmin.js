const jwt = require('jsonwebtoken')

const jwt_key = process.env.jwt_secret

const verifyAdmin = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token){
        return res.status(401).send({message: "Token not verified"});
    }

    jwt.verify(token, jwt_key, (err, user)=> {
        if (err){
            return res.status(403).send({message: "Invalid token"})
        }

        req.user = user
        next();
    })
}
module.exports = verifyAdmin