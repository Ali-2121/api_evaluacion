import { Schema, model } from 'mongoose';
const commentSchema = new Schema({
    barcode: String,
    experience: String,
    name:String,
    description:String
},{
    versionKey:false,
    timestamps:true
})

export default model('coment', commentSchema)
