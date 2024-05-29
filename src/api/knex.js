const db = require('knex')({
    client: 'pg',
    version: '16',
    connection: {
      host : process.env.POSTGRESQL_HOST,
      port : process.env.POSTGRESQL_PORT,
      user : process.env.POSTGRESQL_USER,
      password : process.env.POSTGRESQL_PASSWORD,
      database : process.env.POSTGRESQL_DATABASE
    }
});

//db.destroy();

module.exports =  db;