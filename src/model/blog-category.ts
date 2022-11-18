import mongoose, { model, Schema } from "mongoose";
import AutoIncrementFactory from 'mongoose-sequence'
import { IBlog } from "./blog";
import { ICategory } from "./categories";

export interface IBlogCategory{
    _id?:number;
    Blog?: IBlog,
    Category?: ICategory
}

let blogCategorySchema = new Schema<IBlogCategory>({
    _id: Number,
    Blog:{
        type:Number,
        ref: "Blog"
    },
    Category: {
        type: Number,
        ref: "Category"
    }
})
const AutoIncrement = AutoIncrementFactory(mongoose);

blogCategorySchema.plugin(AutoIncrement,{id:'blog_category_counter',inc_field: '_id'});

const BlogCategory = model<IBlogCategory>('BlogCategory', blogCategorySchema);
export {BlogCategory as Category};