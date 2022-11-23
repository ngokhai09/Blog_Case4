"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blog_service_1 = __importDefault(require("../service/blog-service"));
class BlogController {
    constructor() {
        this.store = async (req, res) => {
            let blog = req.body;
            blog = await blog_service_1.default.addBlog(blog);
            return res.status(201).json(blog);
        };
        this.index = async (req, res) => {
            let blogs = await blog_service_1.default.findAll();
            return res.status(201).json(blogs);
        };
        this.show = async (req, res) => {
            let id = req.params.id;
            let blog = await blog_service_1.default.findById(id);
            return res.status(201).json(blog);
        };
        this.destroy = async (req, res) => {
        };
        this.update = async (req, res) => {
        };
    }
}
exports.default = new BlogController();
//# sourceMappingURL=blog-controller.js.map