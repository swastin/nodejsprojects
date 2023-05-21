/**
 * getAllRoles()
 * getRoleById()
 * createRoles()
 * updateRoles()
 * deleteRoles() 
 */

const roles = require('../models/Roles');

async function getAllRoles(req, res) {
    var role = await roles.findAll();
    return res.json(role);
}
async function getRoleById(req, res) {
    var id = request.params.id;
    var role = await roles.findByPk(id);
    return res.json(role);
}
async function createRoles(req, res) {
    var roles = await roles.create(req.body);
    return res.json(roles);
}
async function updateRoles(req, res) {

    var id = req.params.id;
    await roles.update(req.body, { where: { id: id } });
}
async function deleteRoles(req, res) {
    
}

module.exports = { getAllRoles, getRoleById, createRoles, updateRoles, deleteRoles }