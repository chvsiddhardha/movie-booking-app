const screenController = require('../controllers/screen.controller');

const express = require('express');
const router = express.Router();

router.get('/', screenController.getAllSeats);
router.get('/:id', screenController.getScreensById);
router.post('/', screenController.createScreen);    
router.put('/:id', screenController.updateScreen);
router.delete('/:id', screenController.deleteScreen);

module.exports = router;