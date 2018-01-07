// sqlserver config


const sqlConfig = { name: "Ken Bruen", genre: "Noir", nationality: "Irish" };

function transport(callback) {  
    console.log('start transport data forom sql...');
    
}

// connectto sql
// get records by record stream
// push to array
// send array to orient for insert
// callback from insert
// if success > update records in sql
// if unSuccess > show error / repeat
// if no more records for transport, so end of program and show message

module.exports.transport = transport;  