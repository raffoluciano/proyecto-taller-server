const {Pool} =require('pg');
const config = require('../../config');

const pool = new Pool(config.db);


const getCountry = async (req, res)=> {
  const response = await pool.query('SELECT * FROM pais')
  res.status(200).json(response.rows);
}

const createCountry = async(req, res)=>{
  console.log(req.body);
  const activo = true;
  const nombre = req.body;
  const response = await pool.query('INSERT INTO pais nombre VALUES $1',[nombre])

  console.log(response);
  res.json({
      message: 'Pais Added Succesfully' ,
      body:{
      pais:{nombre,activo}
  } 
})
};

const deleteCountry =async (req,res) =>{
  const nombre= req.params.nombre; 
  console.log('nombre',nombre)
  const response = await pool.query('UPDATE pais SET activo = false WHERE nombre =$1',[nombre]);
  console.log(response);
  res.json(`Pais ${nombre} deleted successfully`);
};



module.exports = {
    getCountry,
    createCountry,
    deleteCountry

}