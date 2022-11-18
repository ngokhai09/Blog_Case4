import mongoose, { model, Schema } from "mongoose";
import AutoIncrementFactory from 'mongoose-sequence'

export interface IImage{
    _id?:number;
    description?:string;
    link?: string;
}

let imageSchema = new Schema<IImage>({
    _id: Number,
    description: String,
    link: String
})
const AutoIncrement = AutoIncrementFactory(mongoose);

imageSchema.plugin(AutoIncrement,{id:'image_counter',inc_field: '_id'});

const Image = model<IImage>('Image', imageSchema);
export {Image};