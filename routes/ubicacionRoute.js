const express = require('express');
const router = express.Router();
const ubicacionController = require('../controllers/ubicacionController');

// Rutas para los activos
router.get('/', ubicacionController.getAll);
router.get('/:id', ubicacionController.getById);
router.post('/', ubicacionController.create);
router.put('/:id', ubicacionController.update);
router.delete('/:id', ubicacionController.delete);

module.exports = router;