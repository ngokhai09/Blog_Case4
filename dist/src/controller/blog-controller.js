"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blog_service_1 = __importDefault(require("../service/blog-service"));
const blog_1 = require("../model/blog");
class BlogController {
    constructor() {
        this.store = async (req, res) => {
            let blog = req.body;
            blog = await blog_service_1.default.addBlog(blog);
            return res.status(201).json(blog);
        };
        this.index = async (req, res) => {
            let limit = 3;
            let offset = 0;
            let page = 1;
            if (req.query.page) {
                page = +req.query.page;
                offset = (+page - 1) * limit;
            }
            let totalBlogs = await blog_1.Blog.countDocuments({ status: { $eq: 2 } });
            let totalPage = Math.ceil(totalBlogs / limit);
            let blogs = await blog_service_1.default.findAll(limit, offset);
            return res.status(201).json({
                blogs: blogs,
                currentPage: page,
                totalPage: totalPage
            });
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
        this.findByUser = async (req, res) => {
            let limit = 6;
            let offset = 0;
            let page = 1;
            if (req.query.page) {
                page = +req.query.page;
                offset = (+page - 1) * limit;
            }
            let totalBlogs = await blog_1.Blog.countDocuments({ Account: Number(req.params.id) });
            let totalPage = Math.ceil(totalBlogs / limit);
            let blogs = await blog_service_1.default.findByUser(req.params.id, limit, offset);
            return res.status(201).json({
                blogs: blogs,
                currentPage: page,
                totalPage: totalPage
            });
        };
        this.findTop4 = async (req, res) => {
            let blogs = await blog_service_1.default.findTop4();
            return res.status(201).json(blogs);
        };
    }
}
exports.default = new BlogController();
//# sourceMappingURL=blog-controller.js.map