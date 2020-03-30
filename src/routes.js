const routes = require("express").Router();
const { User } = require('./app/models');
const SessionController = require('./app/controllers/SessionController');

routes.post('/sessions', SessionController.store);

User.create({name: 'vini123', email: 'teste123@123123', password_hash: '123123'});
console.log(User);
module.exports = routes;