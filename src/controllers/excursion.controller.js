const {Pool} =require('pg');
const config = require('../../config');

const pool = new Pool(config.db);


const getExcursion = async (req, res)=> {
  const response = await pool.query('SELECT * FROM excursion')
  res.status(200).json(response.rows);
}

const getExcursionById = async(req,res)=> {
    const id = req.params.id;
    console.log('id',id)
    const response = await pool.query('SELECT * FROM excursion WHERE id = $1', [id])
    res.json(response.rows);
};


const createExcursion = async(req, res)=>{
  console.log(req.body);
  const activo = true;
  const{id,nombre,duracion ,descripciom,precio} = req.body;
  const response = await pool.query('INSERT INTO usuario (id,nombre,duracion,descripciom,precio,activo) VALUES($1,$2,$3,$4,$5,$6)',[id,nombre,duracion,descripciom,precio,activo])

  console.log(response);
  res.json({
      message: 'Excursion Added Succesfully' ,
      body:{
      hotel:{id,nombre,duracion,descripciom,precio,activo}
  } 
})
};

const deleteExcursion =async (req,res) =>{
  const id= req.params.id; 
  console.log('id',id)
  const response = await pool.query('UPDATE hotel SET activo = false WHERE id =$1',[id]);
  console.log(response);
  res.json(`Excursion ${id} deleted successfully`);
};

const updateExcursion =async (req,res) =>{
  const{id,nombre,duracion,descripciom,precio,activo} = req.body;
  console.log('id',id)
  const response = await pool.query('UPDATE excursion SET nombre = $2, duracion = $3, descripcion = $4, precio = $5, activo = $6  WHERE id =$1',[nombre,duracion,descripciom,precio,activo])       
  console.log(response);
  res.json(`Excursion ${id} updated successfully`);
};




module.exports = {
    getExcursion,
    getExcursionById,
    createExcursion,
    deleteExcursion,
    updateExcursion

}