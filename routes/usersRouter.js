var express = require('express');
var router = express.Router();
/**
 * create=>POST
 * Read=>GET
 * update=>PUT
 * delete=>DELETE
 *get single user by id or name(findById()/pk())
 *get all the user (findAll())
 * 
 * 
 */

var express = require('express');
var userRouter = express.Router();
var { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userController');
userRouter.post('/users', createUser);
userRouter.get('/users', getAllUsers);
userRouter.get('/users/:id', getUserById);
userRouter.put('/users/:id', updateUser);
userRouter.delete('/users/:id', deleteUser);

module.exports = userRouter;


