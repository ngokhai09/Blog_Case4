"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blog_1 = require("../model/blog");
class BlogService {
    constructor() {
        this.addBlog = async (blog) => {
            blog.isActive = 1;
            blog.likeCnt = 0;
            blog.commentCnt = 0;
            blog.time_create = Date.now();
            blog.time_update = Date.now();
            return await blog_1.Blog.create(blog);
        };
        this.findAll = async () => {
            return blog_1.Blog.find({ status: { $eq: 2 } }).populate('Account');
        };
        this.findById = async (id) => {
            return blog_1.Blog.findOne({ _id: id }).populate("Account");
        };
        this.findByUser = async (userId) => {
            return blog_1.Blog.find({ Account: Number(userId) }).populate("Account");
        };
        this.updateBlog = async (id, newBlog) => {
            let blog = blog_1.Blog.findOne({ _id: id });
            if (!blog) {
                return null;
            }
        };
        this.delete = async (id) => {
            let blog = blog_1.Blog.findOne({ _id: id });
            if (!blog) {
                return null;
            }
            blog.remove();
            return true;
        };
    }
}
exports.default = new BlogService();
//# sourceMappingURL=blog-service.js.map