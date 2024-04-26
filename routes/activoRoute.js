const express = require('express');
const router = express.Router();
const activoController = require('../controllers/activoController');

// Rutas para los activos
router.get('/', activoController.getAll);
router.get('/:id', activoController.getById);
router.post('/', activoController.create);
router.put('/:id', activoController.update);
router.delete('/:id', activoController.delete);

module.exports = router;
