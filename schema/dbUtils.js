const db = require('./connect');


const getAllCats = async (limit) => {
    const query = `
      SELECT * FROM cats
      LIMIT $1;
    `;
    const values = [limit];
    const result = await db.query(query, values);
    return result;
  };
  
  const getCatById = async (id) => {
    const query = `
      SELECT * FROM cats
      WHERE id = $1;
    `;
    const values = [id];
    const result = await db.query(query, values);    
    return result.rows;
  };
  
  const createCat = async ({ name, age, breed, color, energy_level, temperament }) => {
    const query = `
      INSERT INTO cats (name, age, breed, color, energy_level, temperament)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
    const values = [name, age, breed, color, energy_level, temperament];
    const result = await db.query(query, values);
    return result[0];
  };
  
  const feedCat = async (id) => {
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
  
  const deleteCat = async (id) => {
    const query = `
      DELETE FROM cats
      WHERE id = $1
      RETURNING *;
    `;
    const values = [id];
    const result = await db.query(query, values);
    return result[0];
  };
  
  module.exports = {
    getAllCats,
    getCatById,
    createCat,
    feedCat,
    deleteCat,
  };