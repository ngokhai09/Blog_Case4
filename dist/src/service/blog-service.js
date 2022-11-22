"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blog_1 = require("../model/blog");
class BlogService {
    constructor() {
        this.findAll = async () => {
            let blogs = await blog_1.Blog.find();
            return blogs;
        };
        this.save = async (blog) => {
            return await blog_1.Blog.create(blog);
        };
    }
}
exports.default = new BlogService();
//# sourceMappingURL=blog-service.js.map