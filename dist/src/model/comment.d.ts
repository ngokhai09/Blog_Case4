import mongoose from "mongoose";
import { IAccount } from "./account";
export interface IComment {
    _id?: number;
    id_parent: number;
    content: string;
    Account: IAccount;
}
declare const Image: mongoose.Model<IComment, {}, {}, {}, any>;
export { Image };
