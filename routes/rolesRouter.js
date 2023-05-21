var express = require('express');
var router = express.Router();
var { getAllRoles, getRoleById, createRoles, updateRoles, deleteRoles } = require('../controllers/rolesController');
router.post('/roles', createRoles)
router.get('/roles', getAllRoles)
router.get('/roles/:id', getRoleById)
router.put('/roles/:id', updateRoles)
router.delete('/roles/:id', deleteRoles)