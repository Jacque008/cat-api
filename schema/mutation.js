let cats = require('./data')

const mutation = {
    addCat: async ({ name, age, breed, color, energy_level, temperament }, context) => {
        const cat = { id: cats.length+1, name, age, breed, color, energy_level, temperament }
        cats.push(cat)
        return {
            data: cat,
            ok: true,
            error: ''
        };
    },

    feedCat: async ({ id }, context) => {
        const cat = cats.find(cat => cat.id === id);
        if (!cat) {
            return {
                data: null,
                ok: false,
                error: 'Cat not found'
            };
        }
        cat.energy_level = cat.energy_level + 1 
        return {
            data: cat,
            ok: true,
            error: ''
        };
    },

    deleteCat: async ({ id }, context) => {
        const cat = cats.find(cat => cat.id === id)
        if (!cat) {
            return {
                data: null,
                ok: false,
                error: 'Cat not found'
            };
        }

        cats = cats.filter(cat => cat.id !== id)
        return {
            data: cat,
            ok: true,
            error: ''
        };
    }
};

module.exports = mutation