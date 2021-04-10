const mongoose = require('mongoose');
const ngooseSch = mongoose.Schema;

const Schemaone = new ngooseSch({
    name:
    {
        type: String,
        unique: false
    },
    description:
    {
        type: String,
        unique: false,
        default: ''
    },
    imageurl:
    {
        type: String,
        unique: false
    },
    mootpoints:
    {
        type: Object,
        unique: false
    },
    limit:
    {
        type: Number,
        unique: false
    },
    categories:
    {
        type: Array,
        unique: false
    },
    vendor:
    {
        type: String,
        unique: false
    },
    active:
    {
        type: Boolean,
        unique: false
    },
    deleted_at:{
        type: Date,
        default: null
    }
    
    
},{ timestamps: true });


module.exports = mongoose.model('ProductCol', Schemaone);

