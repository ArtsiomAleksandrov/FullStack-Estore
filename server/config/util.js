const jwt = require('jsonwebtoken')
const ACCESS_TOKEN_SECRET = require('./dev').ACCESS_TOKEN_SECRET

const getToken = (user) => {
    return accessToken = jwt.sign({
        name: user.name,
        email: user.email,
        password: user.password,
        _id: user._id,
        isAdmin: user.isAdmin
    }, process.env.ACCESS_TOKEN_SECRET || ACCESS_TOKEN_SECRET ,{ expiresIn: '48h'})
}


const tokenAuthentication = (req,res,next) => {
    const authHeader = req.headers.authorization
    if(authHeader){
        const token = authHeader.slice(7,authHeader.length)
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET || ACCESS_TOKEN_SECRET, (err,user)=>{
            if(err) return res.send({msg: 'Invalid token'})
            req.user = user 
            next()
        })
    }
}


module.exports = {
    getToken,
    tokenAuthentication
}