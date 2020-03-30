const routes = require("express").Router();
// const { User } = require('./app/models');
const SessionController = require('./app/controllers/SessionController');
const authMiddleware = require('./app/middleware/auth');

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/dashboard', (req, res) => {
    res.status(200).send();
})
// User.create({name: 'vini123', email: 'teste123@123123', password_hash: '123123'});

module.exports = routes;