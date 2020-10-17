const express = require('express')
const PORT = process.env.PORT || 8080
const app = express()
const connectDB = require('./config/dbConnection')
const userRoute = require('./routes/userRoute')
const productRoute = require('./routes/productRoute')
const Product = require('./models/Product')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

connectDB()

app.use('/api/users', userRoute)
app.use('/api/products', productRoute)

app.get('/api/product/:id', async(req,res) => {
    const productId = req.params.id
    const product = await Product.findById({_id: productId})
    
    if(product)
        res.send(product)
    else 
        res.status(404).send({msg: 'Product not found'})
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"))
}

app.listen(PORT, console.log(`Server has started on port: ${PORT}`))