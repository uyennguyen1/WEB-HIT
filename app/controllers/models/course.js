const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
mongoose.plugin(slug);
const course = new Schema({
    name : {
        type : String,
        required: [true, 'name is not invalid'],
    },
    descriptions : 
    {
        type : String,
        required: [true, 'name is not invalid'],
    },
    thumb :
     {    type : String,
          required: [true, 'name is not invalid'],
      },
    total : {
        type : Number,
        required: [true, 'name is not invalid'],
    },
    producer : {
        type : String,
        required: [true, 'name is not invalid'],
    },
    author : {
        type : String,
        required: [true, 'name is not invalid'],
    },
    price : {
        type : Number,
        required: [true, 'name is not invalid'],
    },
    DateAdd : {
        type : Date,
        required: [true, 'name is not invalid'],
    },
    valueID : {type : String},
    slug: { type: String, slug: "name" }
    },
    {
        timestamps:true,
})
//Add plugin
course.plugin(mongooseDelete,{overrideMethods : 'all', deletedAt : true,}
);

module.exports = mongoose.model('course', course);