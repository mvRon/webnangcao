
require('../utils/MongooseUtil');

const { Model } = require('mongoose');
const Models = require('./Models');

const CategoryDAO = {
    async selectAll() {
        const query = {};
        const categories = await Models.Category.find(query).exec();
        return categories;
    }
}

module.exports = CategoryDAO;