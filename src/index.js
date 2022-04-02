const express = require("express");

const sectionController = require("./routes/section.routes.js");
const bookController = require("./routes/book.routes.js");
const authorController = require("./routes/author.routes.js");
const checkoutController = require("./routes/checkedout.routes.js");

const app = express();

app.use(express.json());


app.use("/section", sectionController)
app.use("/book", bookController)
app.use("/author", authorController)
app.use("/checkedout", checkoutController)


module.exports = app;







[
    {
      "_id": "61d2c79a0b8f108ad80ba798",
      "name": "green",
      "__v": 0
    },
    {
      "_id": "61d2c7a60b8f108ad80ba79a",
      "name": "red",
      "__v": 0
    },
    {
      "_id": "61d2c7ae0b8f108ad80ba79c",
      "name": "blue",
      "__v": 0
    },
    {
      "_id": "61d2c7b70b8f108ad80ba79e",
      "name": "pink",
      "__v": 0
    },
    {
      "_id": "61d2c7cf0b8f108ad80ba7a2",
      "name": "white",
      "__v": 0
    },
    {
      "_id": "61d2c7da0b8f108ad80ba7a4",
      "name": "yellow",
      "__v": 0
    }