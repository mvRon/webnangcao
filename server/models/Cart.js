const mongoose = require("mongoose")
const orderDetailSchema = require("./Order").OrderDetailSchema.Schema;

const cartSchema = mongoose.Schema({
    _customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"customers",
        required: true
    },
    cartDetails: [
        {
            type: orderDetailSchema
        },
    ],
});

const Cart = mongoose.Model("carts",cartSchema);
module.exports = {Cart};