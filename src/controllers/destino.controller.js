const {Pool} =require('pg');
const config = require('../../config');

const pool = new Pool(config.db);


const getDestinos = async (req, res)=> {
  const response = await pool.query('SELECT * FROM destino')
  res.status(200).json(response.rows);
}

const getDestinoById = async(req,res)=> {
    const id = req.params.id;
    console.log('id',id)
    const response = await pool.query('SELECT * FROM destino WHERE id = $1', [id])
    res.json(response.rows);
};






module.exports = {
    getDestinos,
    getDestinoById

}
