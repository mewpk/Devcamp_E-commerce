const express = require("express");
const router = express.Router();
const mysql = require("mysql2/promise");


router.get("/", async (req, res) => {
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
        message: "API User Already",
        status: "Success",
        data: result[0]
    }).status(200)


})

router.post("/", async (req, res) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root', // <== ระบุให้ถูกต้อง
        password: '1234', // <== ระบุให้ถูกต้อง
        database: 'stock', // <== ระบุ database ให้ถูกต้อง
        port: 3306, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)

    })
    const { product_name, stock_left, category } = req.body

    const result = await connection.execute(
        `INSERT INTO items (product_name ,stock_left , category) VALUE ("${product_name}","${stock_left}","${category}")`
    )
    await connection.end()
    res.json({
        message: "API User Already",
        status: "Success",
        id: result[0].insertId
    }).status(200)


})

router.put("/", async (req, res) => {

    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root', // <== ระบุให้ถูกต้อง
        password: '1234', // <== ระบุให้ถูกต้อง
        database: 'stock', // <== ระบุ database ให้ถูกต้อง
        port: 3306, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)

    })
    const { product_name, stock_left, category } = req.body

    const result = await connection.execute(
        `INSERT INTO items (product_name ,stock_left , category) VALUE ("${product_name}","${stock_left}","${category}")`
    )
    await connection.end()
    res.json({
        message: "API User Already",
        status: "Success",
        // data : result[0] ,
        id: result[0].data.insertId

    }).status(200)

 
})
router.delete("/:id", async (req, res) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root', // <== ระบุใหถูกตอง
        password: '1234', // <== ระบุใหถูกตอง
        database: 'stock', // <== ระบุ database ใหถูกตอง
        port: 3306, // <== ใส port ใหถูกตอง (default 3306, MAMP ใช 8889)
    })
    try {
        const id = req.params.id;
        const data = await connection.query(`delete from items where id = ${id};`);

        res.json({
            status: "success",
            id : id
        }

        );
        await connection.end();
    } catch (error) {
        res.json(error);
    }

})










module.exports = router;