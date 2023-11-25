const conecction = require("../database");


const obtenerMediodia = (req, res) => {
    conecction.query('SELECT mediodia.*, medicamentos.*  FROM mediodia JOIN medicamentos WHERE mediodia.id_medic = medicamentos.id_medicina', (error, results) =>{
        if(error){
            console.error('Error al obtener los medicamentos', error);
            res.status(500).json({
                error:'Error al obtener medicamentos'
            });
        }else{
            res.json({listamediodia: results});
        }
    });
};

const obtenerMediodiaId = (req, res) => {
    const id = req.params.id_mediodia;
    conecction.query('SELECT*FROM mediodia WHERE id_mediodia = ?', [id], (error, results) =>{
        if(error){
            console.error('Error al obtener el medicamento', error);
            res.status(500).json({error: 'El medicamento no fue encontrado'})
        }else{
            res.json(results[0]);
        }
    });
};

const insertarMediodia = (req, res) => {
    const {id_medic, hora, fecha, estatus} = req.body;
    connection.query('INSERT INTO mediodia (id_medic, hora, fecha, estatus) VALUES (?, ?, ?, ?)', [id_medic, hora, fecha, estatus], (error, results) =>{
        if(error){
            console.error('Error al insertar el medicamento', error);
            res.status(500).json({error:'Error al agregar medicina'});
        }else{
            res.json({message: 'Medicina agregada'});
        }
    });
};

const eliminarMediodia = (req, res) =>{
    const id = req.params.id_noche;
    connection.query('DELETE FROM mediodia WHERE id_mediodia = ?', [id], (error, results) =>{
        if(error){
            console.error('Error al eliminar el medicamento', error);
            res.status(500).json({error:'Error al eliminar medicina'});
        }else{
            res.json({message: 'Medicina eliminada'});
        }
    });
};

const actualizarMediodia = (req, res) => {
    const id = req.params.id_mediodia;
    const {id_medic, hora, fecha, estatus} = req.body;
    conecction.query('UPDATE morning SET id_medic = ?, hora = ?, fecha = ?, estatus = ? WHERE id_morning = ?', [id_medic, hora, fecha, estatus, id], (error, results) =>{
        if(error){
            console.error('Error al actualizar el medicamento', error);
            res.status(500).json({error:'Error al actualizar medicina'});
        }else{
            res.json({message: 'Medicina actualizada'});
        }
    });
};

module.exports = {
    obtenerMediodia,
    obtenerMediodiaId,
    insertarMediodia,
    eliminarMediodia,
    actualizarMediodia
}