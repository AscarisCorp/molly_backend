const express = require("express")
const Owner = require("../models/owner.models")
const auth = require("../middleware/auth")

const ownerRouter = new express.Router()

ownerRouter.post("/owner", auth, async (req, res) => {

    const owner = new Owner(req.body)

    try {

        await owner.save()
        res.send({owner})

    } catch (e) {
        res.status(400).send(e)
    }

})

module.exports = ownerRouter