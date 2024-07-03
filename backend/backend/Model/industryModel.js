const mongoose = require('mongoose')

const industrySchema = new mongoose.Schema({
    destTitle :{type:String},
    id:{type:Number},
    p: {type:String},
    address:{type:String},
    // industry:{type:String},
    Location:{type:String},
    img:{type:String},
    isActive:{type:Boolean,default:false},
    isDeleted:{type:Boolean,default:false},

},{timestamps:true});
//const Industry = mongoose.model("Industry", industrySchema);

module.exports = mongoose.model("Industry",industrySchema)