// sqlserver config

const sql = require('mssql')

const sqlConfig = {
    user: 'sa',
    password: '123s123S',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: 'EmailAnalys- 2',
};

function transport(callback) {
    console.log('start transport data forom sql...');
    // connect to sql streaming
    streamRead();
}

// get record by record using stream
function streamRead() {
    let recordsList = [];
    sql.connect(sqlConfig, err => {
        // ... error checks
        if (err) {
            showMessage('error in connect to sqlserver: ' + err)
        }

        const request = new sql.Request()
        request.stream = true // You can set streaming differently for each request
        request.query('select Body from EmailsInfo where body is not null') // or request.execute(procedure)

        request.on('recordset', columns => {
            // Emitted once for each recordset in a query
        })

        request.on('row', row => {
            // Emitted for each row in a recordset
            // push to array
            recordsList.push(row)
        })

        request.on('error', err => {
            // May be emitted multiple times
        })

        request.on('done', result => {
            sql.close();
            // Always emitted as the last one
            showMessage('all records is ready to insert! #' + recordsList.length)
            // send array to orient for insert

        })
    })

    sql.on('error', err => {
        // ... error handler
        if (err) {
            showMessage('error in connect to sqlserver: ' + err)
        }
    })
}





// callback from insert
// if success > update records in sql
// if unSuccess > show error / repeat
// if no more records for transport, so end of program and show message

function showMessage(msg) {
    console.log(msg)
}

module.exports.transport = transport;  