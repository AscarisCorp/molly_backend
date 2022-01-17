const express = require("express")
const auth = require("../middlewares/auth");
const Business = require('../models/business.models')

const businessRouter = new express.Router();

businessRouter.post("/business/create", auth, async (req, res) => {
    const business = new Business({...req.body, owner_id: req.owner._id})
    
    try {
        await business.save()
        res.send({business, success: 'success'})
    } catch (e) {
        res.status(400).send(e);
    }
})

module.exports = businessRouter