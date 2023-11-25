const express = require('express');

const cualquieraControllers = require('../controllers/cuandoquiera');

const router = express.Router();

router.get('/', cualquieraControllers.obtenerCualquiera);
router.get('/:id_cualquiera', cualquieraControllers.obtenerCualquieraId);
router.post('/', cualquieraControllers.insertarCualquiera);
router.put('/:id_cualquiera', cualquieraControllers.actualizarCualquiera);
router.delete('/:id_cualquiera', cualquieraControllers.eliminarCualquiera);

module.exports = router;