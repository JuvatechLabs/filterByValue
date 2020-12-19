const pool = require('../config/db.config.js');

exports.getTransactionsBySex = (request, response) => {
    const sex = (request.params.sex)
    
    pool.query('SELECT * FROM transactions where "Sex"=$1',[sex], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }