const express = require('express');
const router = express.Router();
const activoTagsController = require('../controllers/activoTagController');

router.get('/', activoTagsController.getAll);
router.post('/asignar', activoTagsController.assignTagToActivo);
router.post('/desasignar', activoTagsController.unassignTagFromActivo);

module.exports = router;
