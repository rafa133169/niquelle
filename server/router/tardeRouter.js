const express = require('express');

const tardeControllers = require('../controllers/tardeControllers');

const router = express.Router();

router.get('/', tardeControllers.insertarTarde);
router.get('/:id_tarde', tardeControllers.obtenerTardeId);
router.post('/', tardeControllers.insertarTarde);
router.put('/:id_tarde', tardeControllers.actualizarTarde);
router.delete('/:id_tarde', tardeControllers.eliminarTarde);

module.exports = router;