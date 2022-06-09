const mysql = require("mysql2/promise");

const connectionSQL =  mysql.createConnection({
        host: 'ls-0cb3ed1e8147b51e9e886e9dbc64735b1df5565d.cwl8elctei5a.ap-southeast-1.rds.amazonaws.com',
        user: 'root', // <== ระบุให้ถูกต้อง
        password: '1212312121', // <== ระบุให้ถูกต้อง
        database: 'dbmaster', // <== ระบุ database ให้ถูกต้อง
        port: 3306, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
    })





module.exports = {connectionSQL};