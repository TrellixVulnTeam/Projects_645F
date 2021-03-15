var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "mucahit",
  password: "qwer1234",
  database: "Randevu",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Veritabanı Bağlantısı Sağlandı!");
});


module.exports = con;
