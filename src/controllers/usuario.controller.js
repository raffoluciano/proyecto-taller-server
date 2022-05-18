const {Pool} =require('pg');
const config = require('../../config');

const pool = new Pool(config.db);

const getUsers = async (req, res)=> {
    //res.send('users');
  const response = await pool.query('SELECT * FROM usuario')
  //coso de la funcion que saque de la base de datos
 //const a = 'Turistico'
//const response = await pool.query('SELECT BuscarTipo($1)',[a])
 // console.log(response.rows);
  //res.send('users');
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
    const activo = true;
    const{nombre,dni,email,nombre_usuario,contrasenia,rol} = req.body;
    const response = await pool.query('INSERT INTO usuario (nombre,dni,email,nombre_usuario,contraseña,activo) VALUES($1,$2,$3,$4,$5,$6)',[nombre,dni,email,nombre_usuario,contrasenia,activo])
            .then(await pool.query('INSERT INTO rol (nombre,dni_usuario,activo) VALUES($1,$2,$3)',[rol,dni,activo]));
  
    console.log(response);
    //res.send('user created');
    res.json({
        message: 'User Added Succesfully' ,
        body:{
        user:{nombre,dni,email,nombre_usuario,contrasenia,activo}
    } 
  })
};
//ver eliminar usuario porque tiene el rol 
const deleteUser =async (req,res) =>{
    //res.send('USER DELETED'+ req.params.id)
    const id= req.params.id; 
    //const response = await pool.query('DELETE FROM usuario WHERE dni =$1', [id])
    console.log('id',id)
    const response = await pool.query('UPDATE rol SET activo = false WHERE dni_usuario =$1',[id])   
    .then(await pool.query('UPDATE usuario SET activo = false WHERE dni =$1', [id]));
    console.log(response);
    res.json(`User ${id} deleted successfully`);
};

const updateUser =async (req,res) =>{
    const{nombre,dni,email,nombre_usuario,contrasenia} = req.body;
    //const response = await pool.query('DELETE FROM usuario WHERE dni =$1', [id])
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