// CHECKEDOUT SCHEMA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const mongoose = require("mongoose");

const checkedOutSchema = new mongoose.Schema({

    user_id: {
        type: String,
        required: true,
    },
    book_id: {
        type: String,
        required: true,
    },
    issue_date: {
        type: String,
        required: true,
    }

},
    {
        versionKey: false,
        timestamps: true,
    })


// const CheckedOut = mongoose.model("checkedOut", checkedOutSchema);
module.exports = mongoose.model("checkedOut", checkedOutSchema);