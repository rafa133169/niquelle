const conecction = require("../database");
const connection = require("../database");

const obtenerMorning = (req, res) => {
    conecction.query('SELECT morning.*, medicamentos.*  FROM morning JOIN medicamentos WHERE morning.id_medic = medicamentos.id_medicina', (error, results) =>{
        if(error){
            console.error('Error al obtener los medicamentos de mañana', error);
            res.status(500).json({
                error:'Error al obtener medicamentos de medicina'
            });
        }else{
            res.json({listamorning: results});
        }
    });
};

const obtenerMorningId = (req, res) => {
    const id = req.params.id_morning;
    conecction.query('SELECT*FROM morning WHERE id_morning = ?', [id], (error, results) =>{
        if(error){
            console.error('Error al obtener el medicamento de mañana', error);
            res.status(500).json({error: 'El medicamento no fue encontrado'})
        }else{
            res.json(results[0]);
        }
    });
};


const insertarMornig = (req, res) => {
    const {id_medic, hora, fecha, estatus} = req.body;
    connection.query('INSERT INTO morning (id_medic, horamorning, fecha, estatus) VALUES (?, ?, ?, ?)', [id_medic, hora, fecha, estatus], (error, results) =>{
        if(error){
            console.error('Error al insertar el medicamento de mañana', error);
            res.status(500).json({error:'Error al agregar medicina'});
        }else{
            res.json({message: 'Medicina agregada'});
        }
    });
};

const eliminarMorning = (req, res) =>{
    const id = req.params.id_morning;
    connection.query('DELETE FROM morning WHERE id_morning = ?', [id], (error, results) =>{
        if(error){
            console.error('Error al eliminar el medicamento de mañana', error);
            res.status(500).json({error:'Error al eliminar medicina'});
        }else{
            res.json({message: 'Medicina eliminada'});
        }
    });
};

const actualizarMorning = (req, res) => {
    const id = req.params.id_morning;
    const {id_medic, hora, fecha, estatus} = req.body;
    conecction.query('UPDATE morning SET id_medic = ?, hora = ?, fecha = ?, estatus = ? WHERE id_morning = ?', [id_medic, hora, fecha, estatus, id], (error, results) =>{
        if(error){
            console.error('Error al actualizar el medicamento de mañana', error);
            res.status(500).json({error:'Error al actualizar medicina'});
        }else{
            res.json({message: 'Medicina actualizada'});
        }
    });
};

module.exports = {
    obtenerMorning,
    obtenerMorningId,
    insertarMornig,
    eliminarMorning,
    actualizarMorning
}