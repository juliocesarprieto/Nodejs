const {Persons} = require('../models/');

module.exports = {
    async getAll(request, response) {
        const persons = await Persons.paginate({},
            {
                page: Number(request.query.page),
                limit: Number(request.query.limit)
            }
        );
        return response.json(persons);
    },

    async findById(request, response) {
        const person = await Persons.findById(request.params.id);
        return response.json(person);
    },

    async save(request, response) {
        let person;
        try {
            person = await Persons.create(request.body);
        }catch(err) {
            return response.status(500).send({errorMsg: err});
        }
        return response.json(person);
    },

    async update(request, response) {
        const person = Persons.findByIdAndUpdate(request.params.id, request.body, {new: true});
        return response.json(person)
    },

    async delete(request, response) {
        await Persons.findByIdAndDelete(request.params.id);
        return response.end();
    }
};
