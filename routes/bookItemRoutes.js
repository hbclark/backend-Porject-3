const express = require('express');
const router = express.Router();

const bookItemController = require("../controllers/bookItemCOntroller");

router.get('/', bookItemController.getAllBookItems);
router.post('/', bookItemController.createBookItem);
router.put('/:id', bookItemController.updateBookItem);
router.delete('/:id', bookItemController.deleteBookItem);

module.exports = router;