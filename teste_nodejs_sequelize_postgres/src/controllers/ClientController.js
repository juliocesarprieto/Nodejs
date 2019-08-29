const { Clients } = require('../models');

module.exports = {
    async getAll(request, response) {
        const clients = await Clients.findAll();
        return response.json(clients);
    },

    async findById(request, response) {
        const client = await Clients.findOne({
            where: {
                id: request.params.id
            }
        });
        if (!client){
            return response.status(400).send({errorMsg: 'Client not found!'});
        }

        return response.json(client);
    },

    async save(request, response) {
        const client = await Clients.create(request.body);
        return response.json(client);
    },

    async update(request, response) {
        const clientUpdated = await Clients.update(
            request.body,
            { 
                returning: true,
                where: {id: request.params.id} 
            });
        response.send(clientUpdated);    
    },

    async delete(request, response) {
        await Clients.destroy({
            where: {
                id: request.params.id
            }
        });
        response.end();
    }
}