const env = {
    database: 'postgres',
    username: 'postgres',
    password: 'postgres',
    host: 'localhost',
    dialect: 'postgres',

    pool: {
      max: 3, 
      min: 0,
      acquire: 30000, // time in in milliseconds, that pool will try to get connection before throwing error
      idle: 10000
    }
  };
  
  module.exports = env;
    