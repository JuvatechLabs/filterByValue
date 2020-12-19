const { database } = require('./env.js');
const env = require('./env.js');
const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
})


const getTransactionsBySex = (request, response) => {  
  const str = request.originalUrl
  const sex = str.split('?')[1]
  pool.query('SELECT * FROM transactions where "Sex"=$1',[sex], (error, results) => {
    //console.log(results.rows)
    if (error) {
      throw error
    }
    
    response.status(200).send(results.rows)
  })
}
 
module.exports = {getTransactionsBySex};
