var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'mvp'
});


var selectAll = function(callback) {
  connection.query('SELECT * FROM items', function(err, results, fields) {
    if(err) {
      console.log('DB results, err: ', results, err)
      callback(err, null);
    } else {
      console.log('DB results: ', results)
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
