import mongoose, { model, Schema } from "mongoose";
import AutoIncrementFactory from 'mongoose-sequence'
import { IAccount } from "./account";
import { IRole } from "./role";

export interface IAccountRole{
    _id?:number;
    Account?: IAccount;
    Role?:IRole;
}

let roleSchema = new Schema<IAccountRole>({
    _id: Number,
    Account:{
        type: Number,
        ref: "Account"
    },
    Role:{
        type: Number,
        ref: "Role"
    }
})
const AutoIncrement = AutoIncrementFactory(mongoose);

roleSchema.plugin(AutoIncrement,{id:'account_role_counter',inc_field: '_id'});

const AccountRole = model<IAccountRole>('AccountRole', roleSchema);
export {AccountRole};