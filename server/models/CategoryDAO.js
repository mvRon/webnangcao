
require('../utils/MongooseUtil');

const { Model } = require('mongoose');
const Models = require('./Models');

const CategoryDAO = {
    async selectAll() {
        const query = {};
        const categories = await Models.Category.find(query).exec();
        return categories;
    },
    async insert(category) {
        const mongoose = require('mongoose');
        category._id = new mongoose.Types.ObjectId();
        const result = await Models.Category.create(category);
        return result;
    },
    async update(category) {
        const newValue = {name: category.name};
        const result = await Models.Category.findByIdAndUpdate(category._id, newValue, {new:true});
        return result;
    },
    async delete(_id){
        const result = await Models.Category.findByIdAndDelete(_id);
        return result;
    }
    
}

module.exports = CategoryDAO;