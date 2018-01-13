
const mysql = require('mysql');

const connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "admin",
  database: "wedding_planner_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
