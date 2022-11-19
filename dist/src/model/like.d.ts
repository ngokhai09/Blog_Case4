import mongoose from "mongoose";
import { IAccount } from "./account";
import { IBlog } from "./blog";
export interface ILike {
    _id?: number;
    Account?: IAccount;
    Blog?: IBlog;
}
declare const Like: mongoose.Model<ILike, {}, {}, {}, any>;
export { Like };
