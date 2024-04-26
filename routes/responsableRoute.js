const express = require('express');
const router = express.Router();
const responsableController = require('../controllers/responsableController');

router.get('/', responsableController.getAll);
router.get('/:id', responsableController.getById);
router.post('/', responsableController.create);
router.put('/:id', responsableController.update);
router.delete('/:id', responsableController.delete);

module.exports = router;