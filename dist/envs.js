"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.default = {
    port: process.env.PORT || 4000,
    graphqlPath: process.env.GRAPHQL_PATH || '/graphql',
};
