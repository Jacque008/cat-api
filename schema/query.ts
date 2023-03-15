// const booksData = require('./data')
import db from './connect'

const getAllCats = async (limit:number) => {
    const query = `
      SELECT * FROM cats
      LIMIT $1;
    `;
    const values = [limit];
    const result = await db.query(query, values);
    return result;
  };
  
  const getCatById = async (id: number) => {
    const query = `
      SELECT * FROM cats
      WHERE id = $1;
    `;
    const values = [id];
    const result = await db.query(query, values);    
    return result.rows;
  };

const query = {
    cats: async ({limit}: {limit: number}) => {
        // return limit ? catsData.slice(0, limit) : catsData;
        return await getAllCats(limit);
    },

    cat: async ({id}: {id: number}) => {
        // return catsData.find(cat => cat.id === id);
        return await getCatById(id);
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

 export default query;