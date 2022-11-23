import {Blog} from "../model/blog";

class BlogService {
    addBlog = async (blog) => {
        blog.isActive = 1;
        blog.likeCnt = 0;
        blog.commentCnt = 0;
        blog.time_create = Date.now();
        blog.time_update = Date.now();
        return await Blog.create(blog);
    }
    findAll = async () => {
        return Blog.find().populate('Account');
    }
    findById = async (id) => {
        return  Blog.findOne({_id: id});
    }
    findByUser = async (userId) => {
        return  Blog.find({Account: Number(userId)}).populate("Account");
    }
    updateBlog = async (id, newBlog) => {
        let blog = Blog.findOne({_id: id});
        if(!blog){
            return null;
        }
    }
    delete = async (id) => {
        let blog = Blog.findOne({_id: id});
        if(!blog){
            return null;
        }
        blog.remove();
        return true;
    }
}

export default new BlogService();