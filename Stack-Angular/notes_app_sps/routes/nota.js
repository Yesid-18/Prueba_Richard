const express = require('express');
const router = express.Router();
const notaController = require('../controllers/notaControllers');

router.post('/', notaController.crearNota);
router.get('/', notaController.obtenerNota);
router.put('/:id', notaController.actualizarNota);
router.get('/:id', notaController.obtenerNotas);
router.get('/:id', notaController.eliminarNota);


module.exports = router;