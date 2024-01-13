
const  {Schema, model} = require('mongoose');

const buildgProject =new Schema({
    nameProject:{
        type: String,
        require:true
    },
    startDate: {
        type: String,
        require:true
    },
    endDate: {
        type: String,
        require:true
    },
    imagesReference: {
        type: Array,
        require:true
    },
    items: {
        type: Array,
        require:true
    },
    unitValue:{
        type: Number,
        require:true
    },
},{
    timestamps:true
})

module.exports = model('BuildgProject',buildgProject)
