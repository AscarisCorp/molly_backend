const express = require("express")
const auth = require("../middlewares/auth");
const ProductQuantity = require('../models/product_quantity.models')

const productQuantityRouter = new express.Router()

productQuantityRouter.post('/product_quantity/add', auth, async (req, res) => {
    const product_quantity = new ProductQuantity(req.body)

    try {
        await product_quantity.save()
        res.send({product_quantity, status : "success"})
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = productQuantityRouter
