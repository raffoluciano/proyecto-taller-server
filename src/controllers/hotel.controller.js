const {Pool} =require('pg');
const config = require('../../config');

const pool = new Pool(config.db);


const getHotel = async (req, res)=> {
  const response = await pool.query('SELECT * FROM hotel')
  res.status(200).json(response.rows);
}

const getHotelByLocalidad = async(req,res)=> {
    const localidad = req.params.localidad;
    console.log('localidad',localidad)
    const response = await pool.query('SELECT * FROM hotel WHERE localidad = $1', [localidad])
    res.json(response.rows);
};

const createHotel = async(req, res)=>{
  console.log(req.body);
  const activo = true;
  const{nombre,direccion,telefono,valoracion,localidad,web} = req.body;
  const response = await pool.query('INSERT INTO usuario (nombre,direccion,telefono,valoracion,localidad,web, activo) VALUES($1,$2,$3,$4,$5,$6)',[nombre,direccion,telefono,valoracion,localidad,web, activo])

  console.log(response);
  //res.send('user created');
  res.json({
      message: 'Hotel Added Succesfully' ,
      body:{
      hotel:{nombre,direccion,telefono,valoracion,localidad,web,activo}
  } 
})
};
const deleteHotel =async (req,res) =>{
  const nombre= req.params.nombre; 
  console.log('nombre',nombre)
  const response = await pool.query('UPDATE hotel SET activo = false WHERE nombre =$1',[nombre]);
  console.log(response);
  res.json(`Hotel ${nombre} deleted successfully`);
};

const updateHotel =async (req,res) =>{
  const{nombre,direccion,telefono,valoracion,localidad,web} = req.body;
  console.log('nombre',nombre)
  const response = await pool.query('UPDATE usuario SET direccion = $2, telefono = $3, valorecion = $4, localidad = $5, web = $6  WHERE nombre =$2',[nombre,direccion,telefono,valoracion,localidad,web])       
  console.log(response);
  res.json(`Hotel ${nombre} updated successfully`);
};




module.exports = {
    getHotel,
    getHotelByLocalidad,
    createHotel,
    deleteHotel,
    updateHotel

}