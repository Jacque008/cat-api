// const schema = require('./schema.js');
// const query = require('./query.js');
// const mutation = require('./mutation.js');
import schema_cat from './schema';
import query from './query';
import mutation from './mutation';

const resolvers = {
    ...query, ...mutation,
};

// module.exports.resolver = resolvers;
// module.exports.schema = schema;

export const resolver = resolvers;
export const schema = schema_cat;