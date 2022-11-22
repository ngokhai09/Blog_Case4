import { Schema } from "mongoose";
import mongoose from "mongoose";
export interface IAccount {
    _id?: number;
    firstName?: string;
    lastName?: string;
    address?: string;
    phone?: string;
    username?: string;
    password?: string;
    create_time?: Date;
    update_time?: Date;
    avatar: string;
    isActive?: boolean;
}
export declare let accountSchema: Schema<IAccount, mongoose.Model<IAccount, any, any, any, any>, {}, {}, {}, {}, "type", IAccount>;
declare const Account: mongoose.Model<IAccount, {}, {}, {}, any>;
export { Account };
