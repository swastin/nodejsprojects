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
    var role = await Roles.findAll({
        where: { isDeleted: 0 }
    });

    if (role === null) {
        return res.status(404).json({ message: "Role is not found" });
    } else {
        return res.json(role);
    }

}
async function getRoleById(req, res) {
    var id = req.params.id;
    var role = await Roles.findByPk(id);
    if (role === null) {
        return res.status(404).json({ message: "Role is not found" });
    } else {
        return res.json(role);
    }
}
async function createRoles(req, res) {
    var roles = await Roles.create(req.body, { fields: ['roleName', 'description'] })
    return res.json(roles);
}
async function updateRoles(req, res) {

    var role = await Roles.findByPk(req.params.id);
    if (role === null) {
        return res.status(404).json({ message: "Role is not found for update" })
    }
    else {
        var updateRole = await Roles.update(req.body, { where: { id: role.id } });
        return res.json(updateRole);
    }


}
async function deleteRoles(req, res) {
    var role = await Roles.findByPk(req.params.id);
    if (role === null) {
        return res.status(404).json({ message: "Role is not found for Delete" })
    }
    else {
        var updateRole = await Roles.update({ isDeleted: 1 }, { where: { id: role.id } });
        return res.json({ success: true })
    }
}

module.exports = { getAllRoles, getRoleById, createRoles, updateRoles, deleteRoles }