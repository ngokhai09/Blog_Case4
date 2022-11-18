import mongoose, { model, Schema } from "mongoose";
import AutoIncrementFactory from 'mongoose-sequence'

export interface ICategory{
    _id?:number;
    name?:string;
    isActive?: boolean;
}

let categorySchema = new Schema<ICategory>({
    _id: Number,
    name: String,
    isActive: Boolean
})
const AutoIncrement = AutoIncrementFactory(mongoose);

categorySchema.plugin(AutoIncrement,{id:'category_counter',inc_field: '_id'});

const Category = model<ICategory>('Category', categorySchema);
export {Category};