/**
 * getAllRoles()
 * getRoleById()
 * createRoles()
 * updateRoles()
 * deleteRoles() 
 */

const Roles = require('../models/Roles');
//const roles = require('../models/Roles');

async function getAllRoles(req, res) {
    var role = await roles.findAll();
    return res.json(role);
}
async function getRoleById(req, res) {
    var id = req.params.id;
    var role = await roles.findByPk(id);
    return res.json(role);
}
async function createRoles(req, res) {
    var roles = await roles.create(req.body, { fields: [] });
    return res.json(roles);
}
async function updateRoles(req, res) {

    // var roles = await Roles.findByPk(req.params.id);
    // await roles.update(req.body, { where: { id: roles.id } });
}
async function deleteRoles(req, res) {

    // var roles = await Roles.findByPk(req.params.id);
    // await roles.update({req.body.isDeleted:tr}, { where: { id: roles.id } });

}

module.exports = { getAllRoles, getRoleById, createRoles, updateRoles, deleteRoles }