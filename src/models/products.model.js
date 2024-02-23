import { Schema, model } from 'mongoose';
const productSchema = new Schema({
    barcode: String,
    src: String,
    title: String,
    titleSpecial: String,
    description:String,
    size:String
},{
    versionKey:false,
    timestamps:true
})

export default model('product', productSchema)