import mongoose from "mongoose";
export interface IRole {
    _id?: number;
    name?: string;
    isActive?: boolean;
}
declare const Role: mongoose.Model<IRole, {}, {}, {}, any>;
export { Role };
