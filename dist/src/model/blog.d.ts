import { Schema } from "mongoose";
import mongoose from "mongoose";
import { IAccount } from "./account";
export interface IBlog {
    _id?: number;
    content?: string;
    title?: string;
    image?: string;
    Account?: IAccount;
    time_create?: Date;
    time_update?: Date;
    status?: number;
    likeCnt?: number;
    commentCnt?: number;
}
export declare let blogSchema: Schema<IBlog, mongoose.Model<IBlog, any, any, any, any>, {}, {}, {}, {}, "type", IBlog>;
declare const Blog: mongoose.Model<IBlog, {}, {}, {}, any>;
export { Blog };
