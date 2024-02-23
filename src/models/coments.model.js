import { Schema, model } from 'mongoose';
const commentSchema = new Schema({
    num_identif: String,
    experience: String,
    name:String,
    description:String
},{
    versionKey:false,
    timestamps:true
})

export default model('coment', commentSchema)
