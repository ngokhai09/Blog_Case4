"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blog_category_1 = require("../model/blog-category");
class BlogCategoryService {
    constructor() {
        this.findAll = async () => {
            let categories = blog_category_1.BlogCategory.find().populate({ path: 'Blog', match: { status: { $eq: 1 } } })
                .populate({ path: 'Category' });
            return categories;
        };
        this.save = async (category) => {
            return await blog_category_1.BlogCategory.create(category);
        };
    }
}
exports.default = new BlogCategoryService();
//# sourceMappingURL=blog-category-service.js.map