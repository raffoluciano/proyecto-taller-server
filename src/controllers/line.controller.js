const {Pool} =require('pg');
const config = require('../../config');

const pool = new Pool(config.db);

const getLine = async(req, res) => {
    const response = await pool.query('select * from linea')
    res.status(200).json(response.rows);
};

const createLine= async(req, res)=>{
    console.log(req.body);
    const activo = true;
    const{cantidad,id_carrito} = req.body;
    const response = await pool.query('INSERT INTO linea (cantidad,id_carrito,activo) VALUES($1,$2,$3)',[cantidad,id_carrito,activo])
  
    console.log(response);
    res.json({
        message: 'Line Added Succesfully' ,
        body:{
        user:{cantidad,id_carrito,activo}
    } 
  })
  };

  const deleteLine = async (req, res) => {
    const id = req.params.id
    console.log('id', id);
    const response = await pool.query('update linea set activo = false where id = $1', [id])
    console.log(response);
    res.json(`Line ${id} deleted successfully`); 
};

module.exports = {
    getLine,
    createLine,
    deleteLine
  
};