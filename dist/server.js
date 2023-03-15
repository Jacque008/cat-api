"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const index_1 = require("./schema/index");
const envs_1 = __importDefault(require("./envs"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(envs_1.default.graphqlPath, (0, express_graphql_1.graphqlHTTP)((request, response, graphQLParams) => ({
    schema: index_1.schema,
    rootValue: index_1.resolver,
    graphiql: true,
    context: {
        request,
        response,
    },
})));
app.listen(envs_1.default.port, () => {
    console.log(`Server is running at http://localhost:${envs_1.default.port}${envs_1.default.graphqlPath}`);
});
