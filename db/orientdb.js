// orientdb config

var OrientDB = require('orientjs');

var server = OrientDB({
   host:       'localhost',
   port:       2424,
   username:   'root',
   password:   '123'
});

// insert records to orientdb
function insertToOrient(callback) {
    db.open().then(function() {
        return db.query('SELECT FROM V LIMIT 1');
     }).then(function(res){
        console.log(res.length);
        db.close().then(function(){
           console.log('closed');
        });
     });
}


module.exports.insertToOrient = insertToOrient;