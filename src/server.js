const app = require("./index.js");

const connect = require("./configs/db.js")

app.listen(2834, async() => {
    try {
        await connect();
        console.log("library server is running on http://localhost:2834");
    } catch (error) {
        console.log(error.message);
        
    }
})