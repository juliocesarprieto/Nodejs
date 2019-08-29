const express = require('express');
const routes = express.Router();

const personControler = require('./controllers/PersonController');
const clientController = require('./controllers/ClientController');

routes.get('/persons', personControler.getAll);
routes.get('/persons/:id', personControler.findById);
routes.post('/persons', personControler.save);
routes.put('/persons/:id', personControler.update);
routes.delete('/persons/:id', personControler.delete);

routes.get('/clients', clientController.getAll);
routes.get('/clients/:id', clientController.findById);
routes.post('/clients', clientController.save);
routes.delete('/clients/:id', clientController.delete);
routes.put('/clients/:id', clientController.update);

module.exports = routes;