const routes = require("express").Router();
import { User } from './app/models';
import SessionController from './app/controllers/SessionController';

routes.post('/sessions', SessionController);

// User.create({name: 'vini123', email: 'teste123@123123', password_hash: '123123'});
console.log(User);
export default routes;