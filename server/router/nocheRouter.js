const express = require('express');

const nocheControllers = require('../controllers/nocheController');

const router = express.Router();

router.get('/', nocheControllers.obtenerNoche);
router.get('/:id_noche', nocheControllers.obtenerNocheId);
router.post('/', nocheControllers.insertarNoche);
router.put('/:id_noche', nocheControllers.actualizarNoche);
router.delete('/:id_noche',nocheControllers.eliminarNoche);

module.exports = router;