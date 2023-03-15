"use strict";
// let cats = require('./data')
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
// const cats = require('./connect');
// const catFunctions = require('./dbUtils');
const connect_1 = __importDefault(require("./connect"));
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
const mutation = {
    addCat: ({ name, age, breed, color, energy_level, temperament }, context) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // const cat = { id: cats.length+1, name, age, breed, color, energy_level, temperament }
            // cats.push(cat)
            const cat = yield createCat({ name, age, breed, color, energy_level, temperament });
            return {
                data: cat,
                ok: true,
                error: ''
            };
        }
        catch (error) {
            return {
                data: null,
                ok: false,
                error: error.message
            };
        }
    }),
    feedCat: ({ id }, context) => __awaiter(void 0, void 0, void 0, function* () {
        //     const cat = cats.find(cat => cat.id === id);
        //     if (!cat) {
        //         return {
        //             data: null,
        //             ok: false,
        //             error: 'Cat not found'
        //         };
        //     }
        //     cat.energy_level = cat.energy_level + 1 
        //     return {
        //         data: cat,
        //         ok: true,
        //         error: ''
        //     };
        // },
        try {
            const cat = yield feedCat(id);
            if (!cat) {
                return {
                    data: null,
                    ok: false,
                    error: 'Cat not found'
                };
            }
            return {
                data: cat,
                ok: true,
                error: ''
            };
        }
        catch (error) {
            return {
                data: null,
                ok: false,
                error: error.message
            };
        }
    }),
    deleteCat: ({ id }, context) => __awaiter(void 0, void 0, void 0, function* () {
        // const cat = cats.find(cat => cat.id === id)
        // if (!cat) {
        //     return {
        //         data: null,
        //         ok: false,
        //         error: 'Cat not found'
        //     };
        // }
        // cats = cats.filter(cat => cat.id !== id)
        // return {
        //     data: cat,
        //     ok: true,
        //     error: ''
        // };
        try {
            const cat = yield deleteCat(id);
            if (!cat) {
                return {
                    data: null,
                    ok: false,
                    error: 'Cat not found'
                };
            }
            return {
                data: cat,
                ok: true,
                error: ''
            };
        }
        catch (error) {
            return {
                data: null,
                ok: false,
                error: error.message
            };
        }
    })
};
// module.exports = mutation
exports.default = mutation;
