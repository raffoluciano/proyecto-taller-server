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
  const { nombre } = req.body;
  const response = await pool.query('INSERT INTO pais (nombre, activo) VALUES( $1, $2  ) RETURNING id',[nombre,activo])

  const { id } = response.rows[0]
  console.log('verrr',response.rows[0]);
  res.json({
      message: 'Country Added Succesfully' ,
      body:{
      pais:{id,nombre,activo}
  } 
})
};

const deleteCountry =async (req,res) =>{
  const nombre= req.params.nombre; 
  console.log('nombre',nombre)
  const response = await pool.query('UPDATE pais SET activo = false WHERE nombre =$1',[nombre]);
  console.log(response);
  res.json(`Country ${nombre} deleted successfully`);
};



module.exports = {
    getCountry,
    createCountry,
    deleteCountry

}