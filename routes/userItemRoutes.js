const express = require('express');
const router = express.Router();

const userItemController = require("../controllers/userItemController");

router.get('/', userItemController.getAllUserItems);
router.post('/register', userItemController.createUserItem);
router.post('/login', userItemController.loginUserItem);
router.get('/protected', userItemController.protectedRoute);
router.get('/:id', userItemController.getUserItem);


router.put('/:id', userItemController.updateUserItem);
router.delete('/:id', userItemController.deleteUserItem);
router.patch('/:id', userItemController.updateUserItemByPatch);



module.exports = router;