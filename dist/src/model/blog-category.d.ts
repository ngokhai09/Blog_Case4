import mongoose from "mongoose";
import { IBlog } from "./blog";
import { ICategory } from "./categories";
export interface IBlogCategory {
    _id?: number;
    Blog?: IBlog;
    Category?: ICategory;
}
declare const BlogCategory: mongoose.Model<IBlogCategory, {}, {}, {}, any>;
export { BlogCategory as Category };
