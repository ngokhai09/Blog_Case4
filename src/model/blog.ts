import { Schema, model} from "mongoose"; 
import AutoIncrementFactory from 'mongoose-sequence'

import mongoose from "mongoose";
import { IImage } from "./image";
import { IAccount } from "./account";
export interface IBlog{
    _id?: number;
    content?:string;
    title?: string;
    Image?:IImage;
    //chế độ bài blog : 0_private , 1_public, 2_friends
    status: number;
    Account?: IAccount;
    time_create?:Date;
    avatar: string,
    time_update?:Date;
    isActive?:boolean;
    likeCnt?: number;
    description: string;
    commentCnt?: number;
}
export let blogSchema = new Schema<IBlog>({
    _id: Number,
    content: String,
    title: String,
    Image:{
        type: Number,
        ref: 'Image'
    },
    Account:{
        type: Number,
        ref: 'Account'
    },
    status: Number,
    description: String,
    avatar: String,
    time_create: Date,
    time_update:Date,
    isActive: Boolean,
    likeCnt: Number,
    commentCnt: Number
})
const AutoIncrement = AutoIncrementFactory(mongoose);

blogSchema.plugin(AutoIncrement, {id:'blog_counter',inc_field: '_id'});

const Blog = model<IBlog>('Blog', blogSchema);
export {Blog};