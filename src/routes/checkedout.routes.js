const express = require("express");

const CheckedOut = require("../models/checkedout.model.js")

const router = express.Router();



router.get("/", async (req, res) => {
    try {
        const checkedout = await CheckedOut.find().lean().exec();
        return res.status(200).send(checkedout);
    } catch (error) {
        return res.status(500).send(error.message);
    }
})
router.post("/", async (req, res) => {

    console.log()

    try {
        const checkedout = await Author.create(req.body);
        return res.status(200).send(checkedout);
    } catch (error) {
        return res.status(500).send(error.message);
    }
})


module.exports = router;
