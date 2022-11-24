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
    findAll = async (limit, offset) => {
        return Blog.find({status: {$eq: 2}}).populate('Account').limit(limit).skip(offset);
    }
    findById = async (id) => {
        return  Blog.findOne({_id: id}).populate("Account");
    }
    findByUser = async (userId, limit, offset) => {
        return  Blog.find({Account: Number(userId)}).populate("Account").limit(limit).skip(offset);
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
    findTop4 = async () => {
        return await Blog.find().sort({commentCnt : -1}).limit(4);
    }
}

export default new BlogService();