const express = require("express");
const app = express();
const path = require("path");

app.get("/html", (req,res)=>{
    res.sendFile(path.join(__dirname,"hobby.html"));
})
app.get("/drone", (req,res)=>{
    res.sendFile(path.join(__dirname,"AIdrone.html"));
})
app.get("/first", (req,res)=>{
    res.sendFile(path.join(__dirname,"kitten.html"));
})
app.listen(3974, ()=>{
    console.log("server is running");
})