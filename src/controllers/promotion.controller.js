const {Pool} =require('pg');
const config = require('../../config');

const pool = new Pool(config.db);

const getPromotions = async (req, res)=> {
    const response = await pool.query('SELECT * FROM promocion')
    res.status(200).json(response.rows);
  }

module.exports = {
    getPromotions
    
}