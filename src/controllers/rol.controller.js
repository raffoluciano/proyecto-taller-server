const {Pool} =require('pg');
const config = require('../../config');

const pool = new Pool(config.db);

const getRoles = async (req, res)=> {
    const response = await pool.query('SELECT * FROM rol')
    res.status(200).json(response.rows);
  }

  const getRoleById = async(req,res)=> {
    const id = req.params.id;
    console.log('id',id)
    const response = await pool.query('SELECT * FROM rol WHERE dni_usuario = $1', [id])
    res.json(response.rows);
};

// el crar rol no es necesario ya que se crea cuando se crea el usuario

//pasa lo mismo con el delete rol

const updateRole =async (req,res) =>{
    const{nombre,dni_usuario,activo} = req.body;
    console.log('id',dni_usuario)
    const response = await pool.query('UPDATE rol SET nombre = $1, activo = $3   WHERE dni_usuario =$2',[nombre,dni_usuario,activo])       
    console.log(response);
    res.json(`User ${dni_usuario} updated successfully`);
  };

module.exports = {
    getRoles,
    getRoleById,
    updateRole
}