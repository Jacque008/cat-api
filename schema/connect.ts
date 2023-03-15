  // const dotenv = require('dotenv')
  // const pgPromise = require('pg-promise');

  import dotenv from 'dotenv';
  import pgPromise from 'pg-promise';

  dotenv.config();
  const pgp = pgPromise({}); // empty pgPromise instance
  const connStr = {
      user: process.env.PGUSER,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      password: process.env.PGPASSWORD,
      port: parseInt(process.env.PGPORT || '5432')
    }

  const db = pgp(connStr); // get connection to your db instance

  // const cats = async () => {
  //   const res = await db.query('SELECT * FROM cats');
  //   return res.rows;
  // };

  const createTable = async () => {
    await db.query(`
          CREATE TABLE IF NOT EXISTS cats (
              id SERIAL PRIMARY KEY,
              name TEXT NOT NULL,
              age INTEGER NOT NULL,
              breed TEXT NOT NULL,
              color TEXT,
              energy_level INTEGER NOT NULL,
              temperament TEXT[])
      `);
  };
  createTable().catch(console.error);

  // module.exports = db;
  export default db;

// exports.db = db;

// const pgp = require('pg-promise')();
// const connStr = 'postgresql://postgres@localhost:5432/postgres'; // add your psql details
// const db = {}
// db.conn = pgp(connectionString);


