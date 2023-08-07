const mysql = require("mysql2");
const dotenv = require('dotenv').config()

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.password,
  database: "crops2cash"
});

connection
  .connect((err) => {
    if (err) {
        console.log(err)
    }
    console.log("Connected!");
  });



  module.exports = connection;