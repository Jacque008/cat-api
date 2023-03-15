// let cats = require('./data')

// const cats = require('./connect');
// const catFunctions = require('./dbUtils');

import db from './connect'

const createCat = async ({ name, age, breed, color, energy_level, temperament }: {name: string, age: number, breed: string, color: string, energy_level: number, temperament: [string]}) => {
    const query = `
    INSERT INTO cats (name, age, breed, color, energy_level, temperament)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
    `;
    const values = [name, age, breed, color, energy_level, temperament];
    const result = await db.query(query, values);
    return result[0];
};

const feedCat = async (id:number) => {
    const query = `
    UPDATE cats
    SET energy_level = energy_level + 1 
    WHERE id = $1
    RETURNING *;
  `;
    const values = [id];
    const result = await db.query(query, values);
    return result[0];
  };
  
const deleteCat = async (id: number) => {
    const query = `
      DELETE FROM cats
      WHERE id = $1
      RETURNING *;
    `;
    const values = [id];
    const result = await db.query(query, values);
    return result[0];
  };

const mutation = {
    addCat: async ({ name, age, breed, color, energy_level, temperament }: {name: string, age: number, breed: string, color: string, energy_level: number, temperament: [string]}, context: any) => {
        try {
            // const cat = { id: cats.length+1, name, age, breed, color, energy_level, temperament }
            // cats.push(cat)
            const cat = await createCat({ name, age, breed, color, energy_level, temperament })            
            return {
                data: cat,
                ok: true,
                error: ''
            };
        } catch (error: any) {
            return {
                data: null,
                ok: false,
                error: error.message
            };
        }
    },

    feedCat: async ({id}: {id: number}, context: any) => {
    //     const cat = cats.find(cat => cat.id === id);
    //     if (!cat) {
    //         return {
    //             data: null,
    //             ok: false,
    //             error: 'Cat not found'
    //         };
    //     }
    //     cat.energy_level = cat.energy_level + 1 
    //     return {
    //         data: cat,
    //         ok: true,
    //         error: ''
    //     };
    // },
    try {
        const cat = await feedCat(id)
        if (!cat) {
            return {
                data: null,
                ok: false,
                error: 'Cat not found'
            };
       }
        return {
            data: cat,
            ok: true,
            error: ''
        };
    } catch (error: any) {
        return {
            data: null,
            ok: false,
            error: error.message
        };
    }
},

    deleteCat: async ({id}:{id: number}, context: any) => {
        // const cat = cats.find(cat => cat.id === id)
        // if (!cat) {
        //     return {
        //         data: null,
        //         ok: false,
        //         error: 'Cat not found'
        //     };
        // }

        // cats = cats.filter(cat => cat.id !== id)
        // return {
        //     data: cat,
        //     ok: true,
        //     error: ''
        // };

        try {
            const cat = await deleteCat(id)
            if (!cat) {
                return {
                    data: null,
                    ok: false,
                    error: 'Cat not found'
                };
            }
            return {
                data: cat,
                ok: true,
                error: ''
            };
        }
        catch (error: any) {
            return {
                data: null,
                ok: false,
                error: error.message
            };
        }
    }
};


// module.exports = mutation

export default mutation;