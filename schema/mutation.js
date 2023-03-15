// let cats = require('./data')
const cats = require('./connect');
const catFunctions = require('./dbUtils');


const mutation = {
    addCat: async ({ name, age, breed, color, energy_level, temperament }, context) => {
        try {
            // const cat = { id: cats.length+1, name, age, breed, color, energy_level, temperament }
            // cats.push(cat)
            const cat = await catFunctions.createCat({ name, age, breed, color, energy_level, temperament })            
            return {
                data: cat,
                ok: true,
                error: ''
            };
        } catch (error) {
            return {
                data: null,
                ok: false,
                error: error.message
            };
        }
    },

    feedCat: async ({id}, context) => {
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
        const cat = await catFunctions.feedCat(id)
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
    } catch (error) {
        return {
            data: null,
            ok: false,
            error: error.message
        };
    }
},

    deleteCat: async ({ id }, context) => {
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
            const cat = await catFunctions.deleteCat(id)
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
        catch (error) {
            return {
                data: null,
                ok: false,
                error: error.message
            };
        }
    }
};


module.exports = mutation