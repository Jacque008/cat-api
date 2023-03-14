const catsData = require('./data')

const query = {
    cats: async ({limit}, context) => {
        return limit ? catsData.slice(0, limit) : catsData;
    },
    cat: async ({id}, context) => {
        return catsData.find(cat => cat.id === id);
    }
};

module.exports = query;