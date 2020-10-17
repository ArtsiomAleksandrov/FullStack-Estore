const mongoose = require('mongoose')
const MONGO_URL = require('./dev').MONGO_URL

const dbConnection = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL || MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database connected')
    }
    catch(err){
        console.log(err)
    }
}

module.exports = dbConnection