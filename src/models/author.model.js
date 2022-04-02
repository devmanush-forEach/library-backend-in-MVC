//  AUTHOR SCHEMA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const mongoose = require("mongoose");


const authorSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: false,
    }
},
    {
        versionKey: false,
        timestamps: true,
    })


// const Author = mongoose.model("author", authorSchema);
module.exports = mongoose.model("author", authorSchema);