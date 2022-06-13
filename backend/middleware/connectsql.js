const mysql = require("mysql2/promise");

const connectionSQL =  mysql.createConnection({
        host: '13.212.113.0',
        user: 'root', // <== ระบุให้ถูกต้อง
        password: 'mypassword', // <== ระบุให้ถูกต้อง
        database: 'stock', // <== ระบุ database ให้ถูกต้อง
        port: 3306, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
    })





module.exports = {connectionSQL};