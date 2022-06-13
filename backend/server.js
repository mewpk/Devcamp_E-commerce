const express = require('express');
const app = express()
const bodyParser = require("body-parser");
const cors = require("cors")
const userCtrl = require('./Routes/userCtrl')
const { connectionSQL } = require("./middleware/connectsql");

app.use(cors())
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json())


app.get("/", async(req,res)=>{
    try {
        const connection = await connectionSQL
        const result = await connection.execute(`select * from user`)
        if (result) {
            res.json({
                message: "API User Already",
                status: "Successful",
                data: result[0]
            }).status(200)
            await connection.end()
        } else {
            res.json({
                message: "API User Not Already",
                status: "UnSuccessful"

            }).status(400)
            await connection.end()
        }
        
    } catch (error) {
        console.log(error);
    }
})

app.use("/user" , userCtrl);
app.listen(3000, ()=>{

    console.log("SERVER START PROT ====> 3000");
})