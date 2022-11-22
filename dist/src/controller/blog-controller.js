"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blog_service_1 = __importDefault(require("../service/blog-service"));
class BlogController {
    constructor() {
        this.save = async (req, res) => {
            let blog = req.body;
            blog = await blog_service_1.default.save(blog);
            return res.status(201).json(blog);
        };
        this.findAll = async (req, res) => {
            let blogs = await blog_service_1.default.findAll();
            return res.status(201).json(blogs);
        };
    }
}
exports.default = new BlogController();
//# sourceMappingURL=blog-controller.js.map