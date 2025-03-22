const mongoose = require("mongoose");

const orderDetailSchema = mongoose.Schema({
    _product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true
    },
    price:{
        type: Number,
    },
    quantity:{
        type: Number,
        required: true
    },
    amount:{
        type: Number,
    },
},{versionKey: false, _id: false});

const OrderDetailSchema = mongoose.Model("orderDetails",orderDetailSchema);
module.exports = {OrderDetailSchema};