//  BOOKS SCHEMA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const mongoose = require("mongoose");


const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    pages: {
        type: Number,
        required: false,
    },
    publicationDate: {
        type: String,
        required: true,
    },
    checkedout: {
        type: Boolean,
        default: false,
        required: true,
    },
    section_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "section",
        required: true,
    },
    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "author",
        required: true,
    }
},
    {
        versionKey: false,
        timestamps: true,
    })


// const Book = mongoose.model("book", bookSchema)
module.exports = mongoose.model("book", bookSchema)