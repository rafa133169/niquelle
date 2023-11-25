const conecction = require('../database');
const connection = require('../database')

const agregarMedicamento = (req, res) => {
    const {nombreMedicina, dosis,toma, dia , hora, fecha, comentarios, estatus} = req.body;
    connection.query('INSERT INTO medicamentos (nombreMedicina, dosis,toma, dia , hora, fecha, comentarios, estatus) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [nombreMedicina, dosis,toma, dia , hora, fecha, comentarios, estatus], (error, results) => {
        if(error){
            console.error("Error al agregar medicina", error);
            res.status(500).json({error:"Error al agregar medicina"})
        }else{
            res.json({message:"Medicina agregada"})
        }
    });
}

const obtenerMedicamento = (req, res) => {
    conecction.query('SELECT * FROM medicamentos',(error, results) =>{
        if(error){
            console.error("Error al obtener la medicina", error);
            res.status(500).json({
                error: "Error al obtener medicina",
            });
        } else{
            res.json({listamedicina:results});
        }
    })
}

const obtenerMedicamentoId = (req, res) =>{
    const id = req.params.id_medicina;

    conecction.query('SELECT * FROM medicamentos WHERE id_medicina = ?', [id], (error,results) => {
        if(error){
            console.error("Error al obtener la medicina", error);
            res.status(500).json({error:"Ocurrio un error al obtener medicina"});
        }else if (results.length === 0){
            res.status(500).json({error: "La medicina no fue encontrada"})
        }else{
            res.json(results[0]);
        }
    })
}

const eliminarMedicamento = (req, res) =>{
    const id = req.params.id_medicina;
    conecction.query('DELETE * FROM medicamentos WHERE id_medicina = ?', [id], (error,results) => {
        if(error){
            console.error("Error al eliminar la medicina", error);
            res.status(500).json({error:"Ocurrio un error al eliminar medicina"});
        }else{
            res.json({message:"La medicina fue eliminada correctamente"});
        }
    })
}

const actualizarMedicamento = (req, res) => {
    const id = req.params.id_medicina;
    const { nombreMedicina, dosis, toma, dia, hora, fecha, comentarios, estatus } = req.body;

    // Aquí agregamos una conversión a tipo booleano para el estado del checkbox
    const estatusCheckbox = estatus === 'true'; // o usar JSON.parse(estatus) si estatus es un string 'true' o 'false'

    connection.query(
        'UPDATE medicamentos SET nombreMedicina = ?, dosis = ?, toma = ?, dia = ?, hora = ?, fecha = ?, comentarios = ?, estatus = ? WHERE id_medicina = ?',
        [nombreMedicina, dosis, toma, dia, hora, fecha, comentarios, estatusCheckbox, id],
        (error, results) => {
            if (error) {
                console.error("Error al actualizar medicamento", error);
                res.status(500).json({ error: "Ocurrió un error al actualizar el medicamento" });
            } else {
                res.json({ message: "El medicamento se actualizó correctamente" });
            }
        }
    );
};

module.exports = {
    agregarMedicamento,
    obtenerMedicamento,
    eliminarMedicamento, 
    obtenerMedicamentoId,
    actualizarMedicamento
}