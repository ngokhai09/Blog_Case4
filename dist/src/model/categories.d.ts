import mongoose from "mongoose";
export interface ICategory {
    _id?: number;
    name?: string;
    isActive?: boolean;
}
declare const Category: mongoose.Model<ICategory, {}, {}, {}, any>;
export { Category };
