const express = require("express")
const auth = require("../middlewares/auth");
const businessRouter = require("./business.routes");
const BusinessType = require('../models/business_type.models')

const businessTypeRouter = new express.Router()

businessTypeRouter.get("/business_type/get_all", auth, async (req, res) => {
    try {
        const businessTypes = await BusinessType.find({})
        res.send({businessTypes, status: "success"})
    } catch (e) {
        res.status(400).send(e);
    }
})

module.exports = businessRouter