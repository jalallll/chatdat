const express = require("express"),

    app = express(),
    port = process.env.PORT || 5000,
    cors = require("cors");


app.use(cors());
app.listen(port, ()=>console.log("Backend Express server is live! Port: " + port));

app.get("/", (req,res)=>{
    res.send({message: "Backend is Live!"});
});