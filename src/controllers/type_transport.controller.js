/*const {Pool} =require('pg');
const config = require('../../config');

const pool = new Pool(config.db);


const getType_transport = async (req, res)=> {
  const response = await pool.query('SELECT * FROM tipo_transporte')
  res.status(200).json(response.rows);
}

const getType_transportById = async(req,res)=> {
    const id = req.params.id;
    console.log('id_transporte',id)
    const response = await pool.query('SELECT * FROM tipo_transporte WHERE id_transporte = $1', [id])
    res.json(response.rows);
};

const createType_transport = async(req, res)=>{
    console.log(req.body);
    const activo = true;
    const{id_transporte,nombre} = req.body;
    console.log(id_transporte)
    const response = await pool.query('INSERT INTO tipo_transporte (id_transporte,nombre, activo) VALUES($1,$2,$3)',[id_transporte,nombre, activo])
  
    console.log(response);
    res.json({
        message: 'Type_transport Added Succesfully' ,
        body:{
        hotel:{id_transporte,nombre, activo}
    } 
  })
  };

  const deleteType_transport= async (req, res) => {
    const id = req.params.id
    console.log('id', id);
    const response = await pool.query('update tipo_transporte set activo = false where id = $1', [id])
    console.log(response);
    res.json(`Type_transport ${id} deleted successfully`); 
};


module.exports = {
    getType_transport,
    getType_transportById,
    createType_transport,
    deleteType_transport

}
*/