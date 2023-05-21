var express = require('express');
var roleRouter = express.Router();
var { getAllRoles, getRoleById, createRoles, updateRoles, deleteRoles } = require('../controllers/rolesController');
roleRouter.post('/roles', createRoles);
roleRouter.get('/roles', getAllRoles);
roleRouter.get('/roles/:id', getRoleById);
roleRouter.put('/roles/:id', updateRoles);
roleRouter.delete('/roles/:id', deleteRoles);

module.exports = roleRouter;