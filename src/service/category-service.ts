import {Category} from "../model/Categories";

class CategoryService {
    findAll = async () => {
        let categories = await Category.find();
        return categories;
    }
    save = async (categories) => {
        return await Category.create(categories);
    }
}
export default new CategoryService();