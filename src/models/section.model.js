//  SECTION SCHEMA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const mongoose = require("mongoose");


const { model } = require("mongoose")


const sectionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }

},
    {
        versionKey: false,
        timestamps: true,
    })



// const Section = mongoose.model("section", sectionSchema)
module.exports = mongoose.model("section", sectionSchema)