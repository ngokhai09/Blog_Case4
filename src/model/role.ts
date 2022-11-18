import mongoose, { model, Schema } from "mongoose";
import AutoIncrementFactory from 'mongoose-sequence'

export interface IRole{
    _id?:number;
    name?:string;
    isActive?: boolean;
}

let roleSchema = new Schema<IRole>({
    _id: Number,
    name: String,
    isActive: Boolean
})
const AutoIncrement = AutoIncrementFactory(mongoose);

roleSchema.plugin(AutoIncrement,{id:'role_counter',inc_field: '_id'});

const Role = model<IRole>('Role', roleSchema);
export {Role};