const express = require('express')
const User = require('../models/User')
const router = express.Router()
const {getToken} = require('../config/util')
const ADMIN_NAME = require('../config/dev').ADMIN_NAME
const ADMIN_EMAIL = require('../config/dev').ADMIN_EMAIL
const ADMIN_PASSWORD = require('../config/dev').ADMIN_PASSWORD

router.post('/signin', async(req,res) => {

    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })

    if(signinUser){
    const accessToken = getToken(signinUser)
    res.send({
            _id: signinUser._id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            accessToken: accessToken
        })
    }
    else{
        res.status(401).send({msg: 'Invalid email or password'})
    }

})

router.post('/register', async(req,res) => {
    
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })

        const newUser = await user.save()

        if(newUser){
            res.send({
                _id: newUser._id,
                name: newUser.name,
                password: newUser.password,
                email: newUser.email,
                token: getToken(newUser),
                
            })
        }
        else{
            res.status(401).send({msg: 'Invalid user data'})
        }

})

router.get('/createadmin', async(req,res) => {
    try{
        const user = new User({
            name: ADMIN_NAME,
            email: ADMIN_EMAIL,
            password: ADMIN_PASSWORD,
            isAdmin: true
        })
        const newUser = await user.save()
        res.send(newUser)
    }
    catch(err){
        res.send({msg: err})
    }
})

module.exports = router