import {Blog} from "../model/blog";

class BlogService {
    findAll = async () => {
        let blogs = await Blog.find();
        return blogs;
    }
    save = async (blog) => {
        return await Blog.create(blog);
    }
}
export default new BlogService();