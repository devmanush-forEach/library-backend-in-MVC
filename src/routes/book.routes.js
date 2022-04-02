const express = require("express");

const Book = require("../models/book.model.js")

const router = express.Router();


router.get("/", async (req, res) => {

    console.log("body : ", req.body);

    try {
        const books = await Book.find().
        populate({ path : "section_id", select: { name : 1}}).
        populate({ path : "author_id", select: { first_name : 1, last_name : 1 } }).
        lean().exec();
        return res.status(200).send(books);

    } catch (err) {

    }

});

router.get("/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id).
        populate({ path : "section_id", select: {name : 1}}).
        populate({ path : "author_id", select: { first_name : 1, last_name : 1 } }).
        lean().exec();

        return res.status(200).send(book)

    } catch (error) {
        return res.status(500).send(error.message);

    }
})


router.post("/", async (req, res) => {

    console.log("body : ", req.body);

    try {
        const book = await Book.create(req.body);
        return res.status(201).send(book);

    } catch (err) {
        return res.status(500).send(error.message);
    }

})


router.get("/section/:ids", async (req, res) => {
    try {
        const book = await Book.find({ "section_id": req.params.ids }).lean().exec();

        return res.status(200).send(book)

    } catch (error) {
        return res.status(500).send(error.message);

    }
})



router.get("/author/:ida", async (req, res) => {
    try {
        const book = await Book.find({ "author_id": req.params.ida }).lean().exec();

        return res.status(200).send(book)

    } catch (error) {
        return res.status(500).send(error.message);

    }
})




router.get("/section/:ids/author/:ida", async (req, res) => {
    try {
        const book = await Book.find({ $and: [{ "author_id": req.params.ida }, { "section_id": req.params.ids }] }).lean().exec();

        return res.status(200).send(book)

    } catch (error) {
        return res.status(500).send(error.message);

    }
})


router.patch("/ckeckedout/:idb", async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.idb, req.body, { new: true }).lean().exec();
        return res.status(200).send(book)

    } catch (error) {
        return res.status(500).send(error.message);

    }
})


module.exports = router;
