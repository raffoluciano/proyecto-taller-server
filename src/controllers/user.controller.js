const {Pool} =require('pg');
const config = require('../../config');

const pool = new Pool(config.db);

const getUsers = async (req, res)=> {
  const response = await pool.query('SELECT * FROM usuario')
  res.status(200).json(response.rows);
}

const getUsersById = async(req,res)=> {
    const id = req.params.id;
    console.log('id',id)
    const response = await pool.query('SELECT * FROM usuario WHERE dni = $1', [id])
    res.json(response.rows);
} 

const createUser = async(req, res)=>{
    console.log(req.body);
    const{nombre,dni,email,contraseña} = req.body;
    console.log('verrrrr',contraseña)
    const response = await pool.query('INSERT INTO usuario (nombre,dni,email,contrasena) VALUES($1,$2,$3,$4)',[nombre,dni,email,contraseña])
  
    console.log(response);
    res.json({
        message: 'User Added Succesfully' ,
        body:{
        user:{nombre,dni,email,contraseña}
    } 
  })
};

const deleteUser =async (req,res) =>{
    const id= req.params.id; 
    console.log('id',id)
    const response = await pool.query('UPDATE rol SET activo = false WHERE dni_usuario =$1',[id])   
    .then(await pool.query('UPDATE usuario SET activo = false WHERE dni =$1', [id]));
    console.log(response);
    res.json(`User ${id} deleted successfully`);
};

const updateUser =async (req,res) =>{
    const{nombre,dni,email,nombre_usuario,contrasenia} = req.body;
    console.log('id',dni)
    const response = await pool.query('UPDATE usuario SET nombre = $1, email = $3,nombre_usuario = $4, contraseña = $5  WHERE dni =$2',[nombre,dni,email,nombre_usuario,contrasenia])       
    console.log(response);
    res.json(`User ${dni} updated successfully`);
};

    module.exports = {
        getUsers,
        getUsersById,
        createUser,
        deleteUser,
        updateUser
        
    }