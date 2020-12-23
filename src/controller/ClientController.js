const Client = require('../model/Client');

module.exports = {
    async create(req, res) {
        const client = await Client.create(req.body);
        return res.status(201).json(client);
    },

    async index(req,res) {
        const client = await Client.find();
        return res.json(client);
    },

    async show(req,res){
        const { id } = req.params;
        const client = await Client.findById(id)

        if(!client) {
            return res.status(404).json({error: "Client not found"})
        }

        return res.json(client);
        },

        async update(req,res) {
            const { id } = req.params;
            const client = await Client.findByIdAndUpdate(id, req.body, {new: true})
        

        if(!client) {
            return res.status(404).json({error: "Client not found"})
        }

        return res.json(client);
        },

        async delete(req,res) {
            const { id } = req.params;
            const client = await Client.findByIdAndDelete(id)
        

        if(!client) {
            return res.status(404).json({error: "Client not found"})
        }

        return res.json(client);
        }

    }

 
    

    