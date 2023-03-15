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
// const booksData = require('./data')
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
    return result[0];
});
const query = {
    cats: ({ limit }) => __awaiter(void 0, void 0, void 0, function* () {
        // return limit ? catsData.slice(0, limit) : catsData;
        return yield getAllCats(limit);
    }),
    cat: ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
        // return catsData.find(cat => cat.id === id);
        return yield getCatById(id);
    })
};
// const query = {
//     cats: async ({limit}, context) => {
//         // return limit ? catsData.slice(0, limit) : catsData;
//         return await catFunctions.getAllCats(limit)
//     },
//     cat: async ({id}, context) => {
//         // return catsData.find(cat => cat.id === id);
//         return await catFunctions.getCatById(id)
//     }
// };
exports.default = query;
