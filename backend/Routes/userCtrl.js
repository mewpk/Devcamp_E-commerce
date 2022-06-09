const express = require("express");
const router = express.Router();
const { connectionSQL } = require("../middleware/connectsql");




router.get("/", async (req, res) => {
    try {
        const connection = await connectionSQL
        const result = await connection.execute(`select * from items`)
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

router.post("/", async (req, res) => {

    try {
        const connection = await  connectionSQL
        const { product_name, stock_left, category } = req.body

        const result = await connection.execute(
            `INSERT INTO items (product_name ,stock_left , category) VALUE ("${product_name}","${stock_left}","${category}")`
        )
        if (result) {
            res.json({
                message: "API User Already",
                status: "Successful",
                id: result[0].insertId
            }).status(200)
            await connection.end()
        } else {
            res.json({
                message: "API User Not Already",
                status: "UnSuccessful",
            }).status(400)
            await connection.end()
        }
        
    } catch (error) {
        res.json(error);
    }




})

router.put("/", async (req, res) => {
    try {
        const connection = await connectionSQL
        const { product_name, stock_left, category } = req.body

        const result = await connection.execute(
            `INSERT INTO items (product_name ,stock_left , category) VALUE ("${product_name}","${stock_left}","${category}")`
        )

        if (result) {
            res.json({
                message: "API User Already",
                status: "Successful",
                // data : result[0] ,
                id: result[0].data.insertId

            }).status(200)
            await connection.end()
        } else {
            res.json({
                message: "API User Not Already",
                status: "UnSuccessful",

            }).status(400)
            await connection.end()
        }
      
    } catch (error) {
        res.json(error);
    }


})
router.delete("/:id", async (req, res) => {
    try {
        const connection = await connectionSQL
        try {
            const id = req.params.id;
            const data = await connection.query(`delete from items where id = ${id};`);

            if (data) {

                res.json({
                    status: "successful",
                    id: id
                });
                await connection.end()
            } else {
                res.json({
                    status: "unsuccessful"
                });
                await connection.end()
            }

            
        } catch (error) {
            res.json(error);
        }
    } catch (error) {
        res.json(error);
    }


})










module.exports = router;