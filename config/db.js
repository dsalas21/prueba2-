const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: "roundhouse.proxy.rlwy.net", 
    user: "root",
    port: 46785, 
    password: "dPLNXWMXwxFnffTPjiFNjjOVNgZbLQor", 
    database: "railway" 
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to MySQL database");
});



module.exports = connection;