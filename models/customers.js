const mongoose = require('mongoose');
const { Schema } = mongoose;

const CustomerSchema = new Schema({
    uid: {
        type: String,
        required: true
    },
    cname: {
        type: String,
        required: true
    },
    gname: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    pamount: {
        type: Number,
        required: true
    },
    paidamount: [{
        type: Number,
    }],
    paidinterest: [{
        type: Number
    }],
    slug: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    paidtill: {
        type: Date,
    },
});
export default mongoose.models.Customer || mongoose.model('Customer', CustomerSchema);
