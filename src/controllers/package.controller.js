
const req = require('express/lib/request')
const { Pool } = require('pg')
const config = require('../../config')
const pool = new Pool(config.db)



const getPackage = async(req, res) => {
    const parametros = req.query;
    console.log(req.query);
    const cant_query_params = Array.from(Object.keys(parametros)).length
    if (cant_query_params === 0) {
        const response = await pool.query('select * from paquete')
        res.status(200).json(response.rows);
    }
    else {
        let base = 'select * from paquete where '
        const listaClaveValor = Object.entries(parametros).map(([clave, valor]) => `${clave}=${valor}`)
        const filtro = listaClaveValor.join(" AND ")
        const consulta = base + filtro
        console.log(consulta);
        const response = await pool.query(consulta)
        res.json(response.rows)
    }

};

const getPackageById = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('select * from paquete where id = $1', [id])
    res.json(response.rows);
};

const getPackageByDestiny = async(req, res) => {
    const destino = req.params.destino;
    const response = await pool.query('select * from paquete where destino ~* $1', [destino])
    res.status(200).json(response.rows);
  
};

const createPackage = async(req, res) => {
    console.log(req.body);
    const {nombre, precio, comienzo, fin, salida, descripcion, cupos, duracion, excursiones, hoteles,imagen1, imagen2, imagen3, destino, transporte,tipo} = req.body;
    const response = await pool.query('insert into paquete (nombre, precio, comienzo, fin, salida, descripcion, cupos, duracion, excursiones, hoteles, imagen1, imagen2, imagen3, destino, transporte,tipo) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16) RETURNING id',
    [nombre, precio, comienzo, fin, salida, descripcion, cupos, duracion, excursiones, hoteles,imagen1, imagen2, imagen3, destino, transporte,tipo])

    const { id } = response.rows[0]
    console.log('verrr',response.rows[0]);
 
    res.json({
      message: 'Package Added Succesfully' ,
      body:{
      package: {id,nombre, precio, comienzo, fin, salida, descripcion, cupos, duracion, excursiones, hoteles,imagen1, imagen2, imagen3, destino, transporte,tipo}
  } 
})};

const deletePackage = async(req, res) => {
    const id = req.params.id
    console.log('id', id);
    const response = await pool.query('delete from paquete where id = $1', [id])
    console.log('lo eliminado', response);
    res.json(`Package ${id} deleted successfully`);       

  }; 
  const updatePackage = async(req, res) => {
    const id = req.params.id;
    const { nombre, precio, comienzo, fin, salida, destino, descripcion, cupos, duracion, excursiones, hoteles, transporte, tipo } = req.body;
    console.log('id', id);
    const response = await pool.query('UPDATE paquete SET nombre = $1, precio = $2, comienzo = $3, fin = $4, salida = $5, destino = $6, descripcion = $7, cupos = $8, duracion = $9, excursiones = $10, hoteles = $11, transporte = $12, tipo = $13 WHERE id = $14', [nombre, precio, comienzo, fin, salida, destino, descripcion, cupos, duracion, excursiones, hoteles, transporte, tipo, id]);
  
    res.json(response);
  };
  const updatePackageCupos = async(req, res) => {
    const id = req.params.id;
    const { cupos } = req.body;
    console.log('id', id);
    const response = await pool.query('call decrementar_cupos($1, $2)', [id, cupos]);
    res.json(response);
  };

  

const saveImagePackage = async (req, res) => {
    res.status(200).json({ message: 'Imagen subida correctamente' });
}


module.exports = {
    getPackage,
    getPackageById,
    getPackageByDestiny,
    createPackage,
    deletePackage,
    updatePackage,
    saveImagePackage ,
    updatePackageCupos
};