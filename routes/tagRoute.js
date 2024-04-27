const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tagController');

// Rutas para los activos
router.get('/', tagController.getAll);
router.get('/:id', tagController.getById);
router.post('/', tagController.create);
router.put('/:id', tagController.update);
router.delete('/:id', tagController.delete);

module.exports = router;
