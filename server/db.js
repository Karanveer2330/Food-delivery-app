const Pool = require('pg').Pool;
const pool= new Pool({
user:"",
password:"admin",
host: "localhost",
port:5432,
database:"fda"

});

module.exports = pool;