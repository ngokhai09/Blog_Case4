import {Category} from "../model/blog-category";

class BlogCategoryService {
    findAll = async () => {
        let categories = await Category.find().populate({path: 'Blog', match: {status : {$eq: 1}}})
            .populate({path: 'Category'});
        return categories;
    }
    save = async (category) => {
        return await Category.create(category);
    }
}
export default new BlogCategoryService();