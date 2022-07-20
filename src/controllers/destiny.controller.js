const {Pool} =require('pg');
const config = require('../../config');

const pool = new Pool(config.db);


const getDestinations = async (req, res)=> {
  const response = await pool.query('SELECT * FROM destino')
  res.status(200).json(response.rows);
}

const getDestinyById = async(req,res)=> {
    const id = req.params.id;
    console.log('id',id)
    const response = await pool.query('SELECT * FROM destino WHERE id = $1', [id])
    res.json(response.rows);
};
//Al agregar destino agregar un pais que ya existe
const createDestiny = async(req, res)=>{
  console.log('pepe');
  console.log(req.body);
  const activo = true;
  const{nombre,idioma,id,nombre_pais} = req.body;
  const response = await pool.query('INSERT INTO destino (nombre,idioma,id,nombre_pais,activo) VALUES($1,$2,$3,$4,$5)',[nombre,idioma,id,nombre_pais,activo])

  console.log(response);
  res.json({
      message: 'User Added Succesfully' ,
      body:{
      user:{nombre,idioma,id,nombre_pais,activo}
  } 
})
};

const deleteDestiny =async (req,res) =>{
  const id= req.params.id; 
  console.log('id',id)
  const response = await pool.query('UPDATE destino SET activo = false WHERE id =$1',[id])   
  console.log(response);
  res.json(`User ${id} deleted successfully`);
};

const updateDestiny =async (req,res) =>{
  const{nombre,idioma,id,nombre_pais,activo} = req.body;
  console.log('id',id)
  const response = await pool.query('UPDATE destino SET nombre = $1, idioma = $2, nombre_pais = $4, activo = $5   WHERE id =$3',[nombre,idioma,id,nombre_pais,activo])       
  console.log(response);
  res.json(`User ${id} updated successfully`);
};



module.exports = {
    getDestinations,
    getDestinyById,
    createDestiny,
    deleteDestiny,
    updateDestiny
}
