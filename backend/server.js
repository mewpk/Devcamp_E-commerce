const express = require('express');
const app = express()
const bodyParser = require("body-parser");
const cors = require("cors")
const userCtrl = require('./Routes/userCtrl')

app.use(cors())
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json())


app.get("/", async(req,res)=>{
    try {
        res.json({
            message : "GOOD"
        })
    } catch (error) {
    }
})

app.use("/user" , userCtrl);
app.listen(3000, ()=>{

    console.log("SERVER START PROT ====> 3000");
})