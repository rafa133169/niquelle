const express = require("express")

const medicinaControllers = require('../controllers/medicinaControllers');

const router = express.Router();

router.post('/', medicinaControllers.agregarMedicamento);
router.get('/', medicinaControllers.obtenerMedicamento);
router.get('/:id_medicina', medicinaControllers.obtenerMedicamentoId);
router.delete('/:id_medicina', medicinaControllers.eliminarMedicamento);
router.put('/:id_medicina', medicinaControllers.actualizarMedicamento);

module.exports = router;