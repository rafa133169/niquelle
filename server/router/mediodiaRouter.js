const express = require('express');

const mediodiaControllers = require('../controllers/mediodiaControllers');

const router = express.Router();

router.get('/', mediodiaControllers.obtenerMediodia);
router.get('/:id_mediodia', mediodiaControllers.obtenerMediodiaId);
router.post('/', mediodiaControllers.insertarMediodia);
router.put('/:id_mediodia', mediodiaControllers.actualizarMediodia);
router.delete('/:id_mediodia', mediodiaControllers.eliminarMediodia);

module.exports = router;