import { Schema, model } from 'mongoose';
const commentSchema = new Schema({
    experience: String,
    name:String,
    description:String
},{
    versionKey:false,
    timestamps:true
})

export default model('coment', commentSchema)