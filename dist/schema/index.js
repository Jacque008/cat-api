"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.resolver = void 0;
// const schema = require('./schema.js');
// const query = require('./query.js');
// const mutation = require('./mutation.js');
const schema_1 = __importDefault(require("./schema"));
const query_1 = __importDefault(require("./query"));
const mutation_1 = __importDefault(require("./mutation"));
const resolvers = Object.assign(Object.assign({}, query_1.default), mutation_1.default);
// module.exports.resolver = resolvers;
// module.exports.schema = schema;
exports.resolver = resolvers;
exports.schema = schema_1.default;
