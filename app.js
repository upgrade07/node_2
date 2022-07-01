const express = require("express")
const app = express()

app.get("/api/main",function(req,res){
    res.write("<h1>We are in API/main</h1>")
    res.end()
})

app.get("/api",function(req,res){
    res.write("<h1>We are in API</h1>")
    res.end()
})

app.listen(3000,()=>{console.log("listening")})