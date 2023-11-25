const express = require('express');

const morningControllers = require('../controllers/morningControllers');

const router = express.Router();

router.get('/', morningControllers.obtenerMorning);
router.get('/:id_morning', morningControllers.obtenerMorningId);
router.post('/', morningControllers.insertarMornig);
router.put('/:id_morning', morningControllers.actualizarMorning);
router.delete('/:id_morning', morningControllers.eliminarMorning);

module.exports = router;