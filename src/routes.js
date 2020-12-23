const express = require('express');

const ClientController = require('./controller/ClientController');

const routes = express.Router();

routes.post('/client', ClientController.create);
routes.get('/client', ClientController.index);
routes.get('/client/:id', ClientController.show);
routes.put('/client/:id', ClientController.update);
routes.delete('/client/:id', ClientController.delete);


module.exports = routes;