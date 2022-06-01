const express = require("express");
const router = express.Router();
const mysql = require("mysql2/promise");


router.get("/",async (req,res)=>{
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root', // <== ระบุให้ถูกต้อง
        password: '1234', // <== ระบุให้ถูกต้อง
        database: 'stock', // <== ระบุ database ให้ถูกต้อง
        port: 3306, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)

    })
    const result = await connection.execute(
        `select * from items`
    )
    await connection.end()
    res.json({
        message : "API User Already",
        status : "Success",
        data : result[0]
    }).status(200)


})



module.exports = router;