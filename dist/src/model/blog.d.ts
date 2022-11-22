import { Schema } from "mongoose";
import mongoose from "mongoose";
import { IImage } from "./image";
import { IAccount } from "./account";
export interface IBlog {
    _id?: number;
    content?: string;
    title?: string;
    Image?: IImage;
    status: number;
    Account?: IAccount;
    time_create?: Date;
    avatar: string;
    time_update?: Date;
    isActive?: boolean;
    likeCnt?: number;
    description: string;
    commentCnt?: number;
}
export declare let blogSchema: Schema<IBlog, mongoose.Model<IBlog, any, any, any, any>, {}, {}, {}, {}, "type", IBlog>;
declare const Blog: mongoose.Model<IBlog, {}, {}, {}, any>;
export { Blog };
