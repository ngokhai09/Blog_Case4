import { Schema, model} from "mongoose"; 
import AutoIncrementFactory from 'mongoose-sequence'

import mongoose from "mongoose";
export interface IAccount{
    _id?: number;
    firstName?: string;
    lastName?: string;
    address?:string;
    phone?:string;
    username?:string;
    password?:string;
    create_time?:Date;
    update_time?:Date;
    avatar: string;
    isActive?:boolean;
}
export let accountSchema = new Schema<IAccount>({
    _id: Number,
    firstName: String,
    lastName: String,
    address: String,
    phone:String,
    avatar: String,
    username:{
        type:String,
        unique: true
    },
    password:String,
    create_time: Date,
    update_time:Date,
    isActive: Boolean
})
const AutoIncrement = AutoIncrementFactory(mongoose);

accountSchema.plugin(AutoIncrement, {id:'account_counter',inc_field: '_id'});

const Account = model<IAccount>('Account', accountSchema);
export {Account};