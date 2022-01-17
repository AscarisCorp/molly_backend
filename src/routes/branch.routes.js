const express = require("express")
const auth = require("../middlewares/auth");
const Branch = require('../models/branch.models')

const branchRouter = new express.Router();

branchRouter.post("branch/add", auth, async (req, res) => {
    const branch = new Branch(req.body)

    try {
        await branch.save()
        res.send({branch, status : "success"})
    } catch (e) {
        res.status(400).send(e);
    }
})

module.exports = branchRouter
