"use strict";
// const dotenv = require('dotenv')
// const pgPromise = require('pg-promise');
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_promise_1 = __importDefault(require("pg-promise"));
dotenv_1.default.config();
const pgp = (0, pg_promise_1.default)({}); // empty pgPromise instance
const connStr = {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: parseInt(process.env.PGPORT || '5432')
};
const db = pgp(connStr); // get connection to your db instance
// const cats = async () => {
//   const res = await db.query('SELECT * FROM cats');
//   return res.rows;
// };
const createTable = () => __awaiter(void 0, void 0, void 0, function* () {
    yield db.query(`
          CREATE TABLE IF NOT EXISTS cats (
              id SERIAL PRIMARY KEY,
              name TEXT NOT NULL,
              age INTEGER NOT NULL,
              breed TEXT NOT NULL,
              color TEXT,
              energy_level INTEGER NOT NULL,
              temperament TEXT[])
      `);
});
createTable().catch(console.error);
// module.exports = db;
exports.default = db;
// exports.db = db;
// const pgp = require('pg-promise')();
// const connStr = 'postgresql://postgres@localhost:5432/postgres'; // add your psql details
// const db = {}
// db.conn = pgp(connectionString);
