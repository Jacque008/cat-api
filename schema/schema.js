const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        cats(limit: Int): [Cat]
        cat(id: Int!): Cat
    }
    type Mutation {
        addCat( name: String!, age: Int!, breed: String, color: String, energy_level: Int!, temperament: [String]): CatResponse

        feedCat( id: Int! ): CatResponse

        deleteCat( id: Int! ): CatResponse
    }
    type Cat {
        id: Int!
        name: String!
        age: Int!
        breed: String
        color: String
        energy_level: Int!
        temperament: [String]
    }
    type Cats {
        cats: [Cat]
    }
    type CatResponse {
        data: Cat
        error: String
        ok: Boolean
    }
`);

module.exports = schema;