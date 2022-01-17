const express = require("express")
const auth = require("../middlewares/auth");
const Customer = require('../models/customer.models')

const customerRouter = new express.Router()

customerRouter.post('/customer/add', auth, async (req, res) => {
    const customer = new Customer(req.body)

    try {
        await customer.save()
        res.send({customer, status: 'success'})
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = customerRouter
