import {BlogCategory} from "../model/blog-category";

class BlogCategoryService {
    findAll = async () => {
        let categories  = BlogCategory.find().populate({path: 'Blog', match: {status : {$eq: 1}}})
            .populate({path: 'Category'})
        return categories;
    }
    save = async (category) => {
        return await BlogCategory.create(category);
    }
}
export default new BlogCategoryService();