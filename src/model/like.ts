import mongoose, { model, Schema } from "mongoose";
import AutoIncrementFactory from 'mongoose-sequence'
import { IAccount } from "./account";
import { IBlog } from "./blog";

export interface ILike{
    _id?:number;
    Account?: IAccount;
    Blog?: IBlog;
}

let likeSchema = new Schema<ILike>({
    _id: Number,
    Account:{
        type: Number,
        ref:'Account'
    },
    Blog:{
        type: Number,
        ref:'Blog'
    }
})
const AutoIncrement = AutoIncrementFactory(mongoose);

likeSchema.plugin(AutoIncrement,{id:'like_counter',inc_field: '_id'});

const Like = model<ILike>('Image', likeSchema);
export {Like};