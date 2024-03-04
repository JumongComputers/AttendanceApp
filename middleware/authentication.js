import jwt from 'jsonwebtoken'
import {config} from 'dotenv'

config()

export default function isSignIn(req, res, next) {
    try {
        if(!req.headers.authorization){
            const token = req.headers.authorization.split(" ")[1]

            const decode = jwt.verify(token, process.env.JWT_SECRET)

            console.log(decode);
            
            req.user = decode

            next();
        } else {
            return res.status(401).send({message: "Unauthorized!"});
        }
    } catch (error) {
        return res.status(401).send({message: error.message})
    }
    return null
}