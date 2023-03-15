// const booksData = require('./data')
const catFunctions = require('./dbUtils');

const query = {
    cats: async ({limit}) => {
        // return limit ? catsData.slice(0, limit) : catsData;
        return await catFunctions.getAllCats(limit);
    },

    cat: async ({id}) => {
        // return catsData.find(cat => cat.id === id);
        return await catFunctions.getCatById(id);
    }
};

// const query = {
//     cats: async ({limit}, context) => {
//         // return limit ? catsData.slice(0, limit) : catsData;
//         return await catFunctions.getAllCats(limit)
//     },
//     cat: async ({id}, context) => {
//         // return catsData.find(cat => cat.id === id);
//         return await catFunctions.getCatById(id)
//     }
// };

module.exports = query;