const express = require("express");
const app = express();
const cors = require("cors")


// app.use(express.static(__dirname + "/uploaded"))   
app.use(cors())
// app.use(bodyParser.json())
app.use("/api/v2", require("./api"))


app.listen(8081, ()=>{
    console.log("Server is running")
})