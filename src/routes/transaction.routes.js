const express = require("express")
const auth = require("../middlewares/auth");
const Transaction = require('../models/transaction.models')

const transactionRouter = new express.Router()

transactionRouter.post('/transaction/add', auth, async (req, res) => {
    const transaction = new Transaction(req.body)

    try {
        await transaction.save()
        res.send({transaction, status : "success"})
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = transactionRouter
