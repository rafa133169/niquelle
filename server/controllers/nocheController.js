const conecction = require("../database");
const connection = require("../database");

const obtenerNoche = (req, res) => {
    conecction.query('SELECT noche.*, medicamentos.*  FROM noche JOIN medicamentos WHERE noche.id_medic = medicamentos.id_medicina', (error, results) =>{
        if(error){
            console.error('Error al obtener los medicamentos', error);
            res.status(500).json({
                error:'Error al obtener medicamentos'
            });
        }else{
            res.json({listaNoche:results});
        }
    });
};

const obtenerNocheId = (req, res) => {
    const id = req.params.id_noche;
    conecction.query('SELECT*FROM noche WHERE id_mediodia = ?', [id], (error, results) =>{
        if(error){
            console.error('Error al obtener el medicamento', error);
            res.status(500).json({error: 'El medicamento no fue encontrado'})
        }else{
            res.json(results[0]);
        }
    });
};

const insertarNoche = (req, res) => {
    const {id_medic, hora, fecha, estatus} = req.body;
    connection.query('INSERT INTO noche (id_medic, hora, fecha, estatus) VALUES (?, ?, ?, ?)', [id_medic, hora, fecha, estatus], (error, results) =>{
        if(error){
            console.error('Error al insertar el medicamento', error);
            res.status(500).json({error:'Error al agregar medicina'});
        }else{
            res.json({message: 'Medicina agregada'});
        }
    });
};

const eliminarNoche = (req, res) =>{
    const id = req.params.id_noche;
    connection.query('DELETE FROM noche WHERE id_noche = ?', [id], (error, results) =>{
        if(error){
            console.error('Error al eliminar el medicamento', error);
            res.status(500).json({error:'Error al eliminar medicina'});
        }else{
            res.json({message: 'Medicina eliminada'});
        }
    });
};

const actualizarNoche = (req, res) => {
    const id = req.params.id_noche;
    const {id_medic, hora, fecha, estatus} = req.body;
    conecction.query('UPDATE noche SET id_medic = ?, hora = ?, fecha = ?, estatus = ? WHERE id_morning = ?', [id_medic, hora, fecha, estatus, id], (error, results) =>{
        if(error){
            console.error('Error al actualizar el medicamento', error);
            res.status(500).json({error:'Error al actualizar medicina'});
        }else{
            res.json({message: 'Medicina actualizada'});
        }
    });
};

module.exports = {
    obtenerNoche,
    obtenerNocheId,
    insertarNoche,
    eliminarNoche,
    actualizarNoche
}