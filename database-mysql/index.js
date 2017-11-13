var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'mvp'
});


var selectAll = function(callback) {
  connection.query('SELECT * FROM items', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var updateStatus = function(title, callback) {
  console.log('change this show~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~: ', title)
  connection.query('UPDATE items SET status = ? WHERE title = ?', ['watching', title], function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      console.log('success: ', fields);
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.updateStatus = updateStatus;
