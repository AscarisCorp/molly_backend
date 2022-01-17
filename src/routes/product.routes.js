const express = require("express")
const auth = require("../middlewares/auth");
const Product = require('../models/product.models')

const productRouter = new express.Router();

productRouter.post("/product/add", auth, async (req, res) => {
    const product = new Product(req.body)

    try {
        await product.save()
        res.send({product, status: 'success'})
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = productRouter
