const express = require("express");
const Owner = require("../models/owner.models");

const ownerRouter = new express.Router();

ownerRouter.post("/owner/register", async (req, res) => {
  const owner = new Owner(req.body);

  try {
    await owner.save();
    res.send({ status: "success" });
  } catch (e) {
    res.status(400).send(e);
  }
});

ownerRouter.post("/owner/login", async (req, res) => {
  try {
    const owner = await Owner.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await owner.generateAuthToken();
    res.send({ token });
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

module.exports = ownerRouter;
