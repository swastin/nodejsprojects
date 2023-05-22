/**
 * getAllUser()
 * getOneUser()
 * createUser()
 * updateUser()
 * deleteUser() 
 */
const Users=require('../models/Users')

async function getAllUsers(req, res) {
    var users = await Users.findAll();
    if (users===null) {
        return res.status('404').json({message:'user not found'});
    } 
    else {
        return res.status('200').json(users);

    }
}
async function getUserById(req, res) {
    var id = req.params.id;
    var role = await Users.findByPk(id);
    if (role === null) {
        return res.status(404).json({ message: "User is not found" });
    } else {
        return res.json(role);
    }
}
async function createUser(req, res) {
    var user = req.body;
    var newUser = await Users.create(user,{fields:['name','email','password']});
    if (newUser === null) {
        return res.status(404).json({ message: "User is not created" });
    } else {
        return res.json(newUser);
    
    }
}
async function updateUser(req, res){}
async function deleteUser(req, res){}

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser }