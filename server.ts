import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema, resolver } from "./schema/index";
import envs from "./envs";

const app = express();
app.use(express.json());

app.use(
    envs.graphqlPath,
    graphqlHTTP((request, response, graphQLParams) => ({
        schema,
        rootValue: resolver,
        graphiql: true,
        context: {
            request,
            response,
        },
    }))
);

app.listen(envs.port, () => {
    console.log(`Server is running at http://localhost:${envs.port}${envs.graphqlPath}`);
});

