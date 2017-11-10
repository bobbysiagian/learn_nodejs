var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kopassus",
  database: "sapm_local"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM employees", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });