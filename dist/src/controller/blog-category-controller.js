"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blog_category_service_1 = __importDefault(require("../service/blog-category-service"));
class BlogCategoryController {
    constructor() {
        this.save = async (req, res) => {
            let blogCategory = req.body;
            blogCategory = await blog_category_service_1.default.save(blogCategory);
            return res.status(201).json(blogCategory);
        };
        this.findAll = async (req, res) => {
            let blogCategory = await blog_category_service_1.default.findAll();
            return res.status(200).json(blogCategory);
        };
    }
}
exports.default = new BlogCategoryController();
//# sourceMappingURL=blog-category-controller.js.map