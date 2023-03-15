"use strict";
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
// const db = require('./connect');
const connect_1 = __importDefault(require("./connect"));
const getAllCats = (limit) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
      SELECT * FROM cats
      LIMIT $1;
    `;
    const values = [limit];
    const result = yield connect_1.default.query(query, values);
    return result;
});
const getCatById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
      SELECT * FROM cats
      WHERE id = $1;
    `;
    const values = [id];
    const result = yield connect_1.default.query(query, values);
    return result.rows;
});
const createCat = ({ name, age, breed, color, energy_level, temperament }) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
      INSERT INTO cats (name, age, breed, color, energy_level, temperament)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
    const values = [name, age, breed, color, energy_level, temperament];
    const result = yield connect_1.default.query(query, values);
    return result[0];
});
const feedCat = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
    UPDATE cats
    SET energy_level = energy_level + 1 
    WHERE id = $1
    RETURNING *;
  `;
    const values = [id];
    const result = yield connect_1.default.query(query, values);
    return result[0];
});
const deleteCat = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
      DELETE FROM cats
      WHERE id = $1
      RETURNING *;
    `;
    const values = [id];
    const result = yield connect_1.default.query(query, values);
    return result[0];
});
// export default {
//   getAllCats,
//   getCatById,
//   createCat,
//   feedCat,
//   deleteCat,
// };
