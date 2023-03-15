const db = require('./connect');
const CatModel = require('./cats');
const cats = require('./dbUtils');

module.exports = {
    db,
    CatModel,
    cats
};