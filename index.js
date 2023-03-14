const schema = require('./schema/schema.js');
const query = require('./schema/query.js');
const mutation = require('./schema/mutation.js');

const resolvers = {
    ...query, ...mutation,
};

module.exports.resolver = resolvers;
module.exports.schema = schema;