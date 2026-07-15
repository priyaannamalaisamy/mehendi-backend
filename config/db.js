const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Arunpriya@#2004",
  database: "arunpriya_mehendi"
});

db.connect((err) => {
  if (err) {
    console.log("MySQL Connection Failed");
    console.log(err);
  } else {
    console.log("MySQL Connected Successfully");
  }
});

module.exports = db;