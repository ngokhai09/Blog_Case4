import mongoose from "mongoose";
import { IAccount } from "./account";
import { IRole } from "./role";
export interface IAccountRole {
    _id?: number;
    Account?: IAccount;
    Role?: IRole;
}
declare const AccountRole: mongoose.Model<IAccountRole, {}, {}, {}, any>;
export { AccountRole };
