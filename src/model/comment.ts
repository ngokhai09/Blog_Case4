import mongoose, { model, Schema } from "mongoose";
import AutoIncrementFactory from 'mongoose-sequence'
import { IAccount } from "./account";

export interface IComment{
    _id?:number;
    id_parent: number;
    content: string;
    Account: IAccount;
}

let commentSchema = new Schema<IComment>({
    _id: Number,
})
const AutoIncrement = AutoIncrementFactory(mongoose);

commentSchema.plugin(AutoIncrement,{id:'image_counter',inc_field: '_id'});

const Image = model<IComment>('Image', commentSchema);
export {Image};