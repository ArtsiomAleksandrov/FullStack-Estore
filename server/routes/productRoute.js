const express = require('express')

const router = express.Router()
const Product = require('../models/Product')
const {tokenAuthentication} = require('../config/util')

router.get('/', async(req,res) => {
    const products = await Product.find({})
    res.send(products)
})

router.post('/create',tokenAuthentication,async(req,res) => {
    if(req.user.isAdmin){
        const product = new Product({
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
            category: req.body.category,
            brand: req.body.brand,
            description: req.body.description,
            inStock: req.body.inStock
        })
        const newProduct = await product.save()
        if(newProduct){
            res.send({msg: 'Product created', data: newProduct})
        }
        else{
            res.send({msg: 'Error in creating product'})
        }
    }
    else{
        res.status(401).json({msg: 'You are not admin'})
    }
})

router.put('/update/:id',tokenAuthentication, async(req,res) => {
    if(req.user.isAdmin){
        const productId = req.params.id 
        const product = await Product.findById({_id: productId})

        product.name = req.body.name,
        product.price = req.body.price,
        product.image = req.body.image,
        product.category = req.body.category,
        product.brand = req.body.brand,
        product.description = req.body.description,
        product.inStock = req.body.inStock

        const updatedProduct = await product.save()

        if(updatedProduct){
            res.send({msg: 'Product updated', data: updatedProduct})
        }
        else{
            res.send({msg: 'Error in creating product'})
        }
    }
    else{
        res.status(401).json({msg: 'You are not admin'})
    }
})

router.delete('/delete/:id',tokenAuthentication, async(req,res) => {
    if(req.user.isAdmin){
        const productToDelete = Product.findById(req.params.id)
        if(productToDelete){
            const deletedProductInfo = await Product.deleteOne(productToDelete)
            res.send({msg: 'Product deleted', data: deletedProductInfo})
        }
        else{
            res.send({msg: 'Error in deletion'})
        }
    }
    else{
        res.status(401).json({msg: 'You are not admin'})
    }
})


module.exports = router