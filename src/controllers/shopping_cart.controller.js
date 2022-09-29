const {Pool} =require('pg');
const config = require('../../config');

const pool = new Pool(config.db);

const getShopping_cart = async (req, res)=> {
    const response = await pool.query('SELECT * FROM carrito')
    res.status(200).json(response.rows);
  }

  const getShopping_cartById = async(req, res) => {
    const id = req.params.id
    const response = await pool.query('select * from carrito where id = $1',[id])
    res.json(response.rows);
};

const createShopping_cart = async(req, res)=>{
    console.log(req.body);
    const activo = true;
    const{fecha,estado} = req.body;
    const response = await pool.query('INSERT INTO carrito (fecha,estado,activo) VALUES($1,$2,$3) RETURNING id',[fecha,estado,activo])
  
    const { id } = response.rows[0]
    console.log('verrr',response.rows[0]);
    res.json({
        message: 'Shopping_cart Added Succesfully' ,
        body:{
        user:{fecha,estado,activo}
    } 
  })
  };

  const deleteShopping_cart =async (req,res) =>{
    const id= req.params.id; 
    console.log('id',id)
    const response = await pool.query('UPDATE carrito SET activo = false WHERE id =$1',[id]);
    console.log(response);
    res.json(`Shopping_cart ${id} deleted successfully`);
  };
  
module.exports = {
    getShopping_cart,
    getShopping_cartById,
    createShopping_cart,
    deleteShopping_cart
    
}