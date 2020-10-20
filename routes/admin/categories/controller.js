const {Category} = require('../../../models/admin/categories');

module.exports = {
    getAllCategory: async(req, res) => {
        const category = await Category.find({})
        try {
            res.json({
                message: 'Get All Data Category',
                category,
            })
        } catch(error){
            res.status(500).send(`Data is ${error}`)
        }
    },
    
    getCategoryById: async(req, res) => {
        const category = await Category.findById(req.params.id)

        try {
            res.json({
                message: 'Get Data By id',
                category,
            })
        } catch (error) {
            res.status(500).send(`Data is ${error}`);
        }
    },

    postCategory: async(req, res) => {
        const category = await Category.create(req.body);

        try {
            res.json({
                message: ' Add Data Success ',
                category,
            })
            
        } catch (error) {
            res.status(500).send(`Data is ${error}`)
        }
    }

}