// const { buildSchema } = require('graphql');

import { buildSchema } from 'graphql';

const schema_cat = buildSchema(`
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

export default schema_cat;

// module.exports = schema;


// const graphql = require('graphql');

// const {
//     GraphQLSchema,
//     GraphQLObjectType,
//     GraphQLString,
//     GraphQLList,
//     GraphQLID,
//     GraphQLInt,
//     GraphQLNonNull,
//   } = require("graphql")

// const CatType = new GraphQLObjectType({
//    name: 'Cat',
//    description: "This represents a cat",
//    fields: () => ({
//      id: { type: new GraphQLNonNull(GraphQLID) },
//      name: { type: new GraphQLNonNull(GraphQLString) },
//      age: { type: GraphQLInt },
//      breed: { type: GraphQLString },
//      color: { type: GraphQLString},
//      energy_level: { type: new GraphQLNonNull(GraphQLInt) },
//      temperament: { type: new GraphQLList(GraphQLString)}
//      })
//  })

//  const RootQuery = new GraphQLObjectType({
//     name: "Query",
//     description: "Root Query",
//     fields: () => ({
//       cat: {
//         type: CatType,
//         description: "A Single Cat",
//         args: {
//           id: { type: GraphQLID }
//         },
//         // resolve: (parent, args) => cats.find(cat => cat.id === args.id)
//         resolve: (parent, args) => {
//             const query = `SELECT * FROM "cat" WHERE id=${args.id}`;
//             return db.conn.one(query)
//                           .then(data => {
//                             return data;})
//                           .catch(err => {
//                             return 'The error is', err;});
//         }
//       },

//       cats: {
//         type: new GraphQLList(CatType),
//         description: "List of All Cats",
//                 resolve: (parent, args) => {
//             const query = `SELECT * FROM "cat"`;
//             return db.conn.many(query)
//                           .then(data => {
//                             return data;})
//                           .catch(err => {
//                             return 'The error is', err;});
//         }
//       }
//     })
//   })

// module.exports = new GraphQLSchema({
//    query: RootQuery
// })