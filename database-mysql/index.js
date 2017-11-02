var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'jahroost',
  password : 'jahroost',
  database : 'app'
});


var selectAll = function(callback) {
  connection.query('SELECT * FROM shows', function(err, results, fields) {
    if(err) {
      console.log('results, err: ', results, err)
      callback(err, null);
    } else {
      console.log('results: ', results)
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
