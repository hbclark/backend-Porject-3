const express = require('express');
const router = express.Router();

const employeeItemController = require("../controllers/employeeItemController");

router.get('/', employeeItemController.getAllEmployeeItems);
router.get('/:id', employeeItemController.getEmployeeItem);
router.post('/', employeeItemController.createEmployeeItem);
router.put('/:id', employeeItemController.updateEmployeeItem);
router.delete('/:id', employeeItemController.deleteEmployeeItem);
router.patch('/:id', employeeItemController.updateEmployeeItemByPatch);

module.exports = router;