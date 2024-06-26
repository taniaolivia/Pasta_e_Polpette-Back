const db = require('knex')({
    client: 'pg',
    version: '16',
    connection: {
      host : process.env.POSTGRES_HOST,
      port : process.env.POSTGRES_PORT,
      user : process.env.POSTGRES_USER,
      password : process.env.POSTGRES_PASSWORD,
      database : process.env.POSTGRES_DB,
      ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false
    }
});

//db.destroy();

module.exports =  db;