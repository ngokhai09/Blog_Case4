"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Categories_1 = require("../model/Categories");
class CategoryService {
    constructor() {
        this.findAll = async () => {
            let categories = await Categories_1.Category.find();
            return categories;
        };
        this.save = async (categories) => {
            return await Categories_1.Category.create(categories);
        };
    }
}
exports.default = new CategoryService();
//# sourceMappingURL=category-service.js.map