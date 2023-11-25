const conecction = require("../database");
const connection = require("../database");

const obtenerTarde = (req, res) => {
    conecction.query('SELECT*FROM tarde', (error, results) =>{
        if(error){
            console.error('Error al obtener los medicamentos', error);
            res.status(500).json({
                error:'Error al obtener medicamentos'
            });
        }else{
            res.json(results);
        }
    });
};

const obtenerTardeId = (req, res) => {
    const id = req.params.id_tarde;
    conecction.query('SELECT*FROM tade WHERE id_tarde = ?', [id], (error, results) =>{
        if(error){
            console.error('Error al obtener el medicamento', error);
            res.status(500).json({error: 'El medicamento no fue encontrado'})
        }else{
            res.json(results[0]);
        }
    });
};

const insertarTarde = (req, res) => {
    const {id_medic, hora, fecha, estatus} = req.body;
    connection.query('INSERT INTO tarde (id_medic, hora, fecha, estatus) VALUES (?, ?, ?, ?)', [id_medic, hora, fecha, estatus], (error, results) =>{
        if(error){
            console.error('Error al insertar el medicamento', error);
            res.status(500).json({error:'Error al agregar medicina'});
        }else{
            res.json({message: 'Medicina agregada'});
        }
    });
};

const eliminarTarde = (req, res) =>{
    const id = req.params.id_tarde;
    connection.query('DELETE FROM tarde WHERE id_mediodia = ?', [id], (error, results) =>{
        if(error){
            console.error('Error al eliminar el medicamento', error);
            res.status(500).json({error:'Error al eliminar medicina'});
        }else{
            res.json({message: 'Medicina eliminada'});
        }
    });
};

const actualizarTarde = (req, res) => {
    const id = req.params.id_tarde;
    const {id_medic, hora, fecha, estatus} = req.body;
    conecction.query('UPDATE tarde SET id_medic = ?, hora = ?, fecha = ?, estatus = ? WHERE id_tarde = ?', [id_medic, hora, fecha, estatus, id], (error, results) =>{
        if(error){
            console.error('Error al actualizar el medicamento', error);
            res.status(500).json({error:'Error al actualizar medicina'});
        }else{
            res.json({message: 'Medicina actualizada'});
        }
    });
};

module.exports = {
    obtenerTarde,
    obtenerTardeId,
    insertarTarde,
    eliminarTarde,
    actualizarTarde
}