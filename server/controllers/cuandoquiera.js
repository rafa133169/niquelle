const conecction = require("../database");
const connection = require("../database");

const obtenerCualquiera = (req, res) => {
    conecction.query('SELECT*FROM cualquiera', (error, results) =>{
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

const obtenerCualquieraId = (req, res) => {
    const id = req.params.id_cualquiera;
    conecction.query('SELECT*FROM cualquiera WHERE id_cualquiera = ?', [id], (error, results) =>{
        if(error){
            console.error('Error al obtener el medicamento', error);
            res.status(500).json({error: 'El medicamento no fue encontrado'})
        }else{
            res.json(results[0]);
        }
    });
};

const insertarCualquiera = (req, res) => {
    const {id_medic, estatus} = req.body;
    connection.query('INSERT INTO cualquiera (id_medic, estatus) VALUES (?, ?)', [id_medic, estatus], (error, results) =>{
        if(error){
            console.error('Error al insertar el medicamento', error);
            res.status(500).json({error:'Error al agregar medicina'});
        }else{
            res.json({message: 'Medicina agregada'});
        }
    });
};

const eliminarCualquiera = (req, res) =>{
    const id = req.params.id_cualquiera;
    connection.query('DELETE FROM cualquiera WHERE id_cualquiera = ?', [id], (error, results) =>{
        if(error){
            console.error('Error al eliminar el medicamento', error);
            res.status(500).json({error:'Error al eliminar medicina'});
        }else{
            res.json({message: 'Medicina eliminada'});
        }
    });
};

const actualizarCualquiera = (req, res) => {
    const id = req.params.id_cualquiera;
    const {id_medic, estatus} = req.body;
    conecction.query('UPDATE cualquiera SET id_medic = ?, estatus = ? WHERE id_cualquiera = ?', [id_medic, estatus, id], (error, results) =>{
        if(error){
            console.error('Error al actualizar el medicamento', error);
            res.status(500).json({error:'Error al actualizar medicina'});
        }else{
            res.json({message: 'Medicina actualizada'});
        }
    });
};

module.exports = {
    obtenerCualquiera,
    obtenerCualquieraId,
    insertarCualquiera,
    eliminarCualquiera,
    actualizarCualquiera
}