import { Schema, model} from "mongoose"; 
import AutoIncrementFactory from 'mongoose-sequence'

import mongoose from "mongoose";
import {Category, ICategory} from "./categories";
import { IAccount } from "./account";
export interface IBlog{
    _id?: number;
    content?:string;
    title?: string;
    image?: string;
    Account?: IAccount;
    time_create?:Date;
    time_update?:Date;
    status?:number;
    likeCnt?: number;
    commentCnt?: number;
    Category: ICategory;
}
export let blogSchema = new Schema<IBlog>({
    _id: Number,
    content: String,
    title: String,
   image: String,
    Account:{
        type: Number,
        ref: 'Account'
    },
    time_create: Date,
    time_update:Date,
    status: Number,
    likeCnt: Number,
    commentCnt: Number,
    Category: {
        type: Number,
        ref: 'Category'
    }
})
const AutoIncrement = AutoIncrementFactory(mongoose);

blogSchema.plugin(AutoIncrement, {id:'blog_counter',inc_field: '_id'});

const Blog = model<IBlog>('Blog', blogSchema);
export {Blog};