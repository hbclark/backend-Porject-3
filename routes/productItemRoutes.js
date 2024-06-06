const express = require('express');
const router = express.Router();

const productItemController = require("../controllers/productItemController");

router.get('/', productItemController.getAllProductItems);
router.get('/:id', productItemController.getProductItem);
router.post('/', productItemController.createProductItem);
router.put('/:id', productItemController.updateProductItem);
router.delete('/:id', productItemController.deleteProductItem);

module.exports = router;