import {Request, Response} from "express";
import accountService from "../service/account-service";
import blogService from "../service/blog-service";
import {Blog} from "../model/blog";

class BlogController {
    store = async (req: Request, res: Response) => {
        let blog = req.body;
        blog = await blogService.addBlog(blog);
        return res.status(201).json(blog)
    }
    index = async (req: Request, res: Response) => {
        let limit = 3;
        let offset = 0;
        let page = 1;
        if (req.query.page) {
            page = +req.query.page;
            offset = (+page - 1) * limit;
        }
        let totalBlogs = await Blog.countDocuments({status: {$eq: 2}});
        let totalPage = Math.ceil(totalBlogs / limit);
        let blogs = await blogService.findAll(limit, offset);
        return res.status(201).json({
            blogs: blogs,
            currentPage: page,
            totalPage: totalPage
        });
    }
    show = async (req: Request, res: Response) => {
        let id = req.params.id;
        let blog = await blogService.findById(id);
        return res.status(201).json(blog);
    }

    destroy = async (req: Request, res: Response) => {
    }

    update = async (req: Request, res: Response) => {
        let id = req.params.id;
        let blog = await blogService.updateBlog(id, req.body);
        if(!blog){
            return res.status(201).json("Blog Not Found");
        }
        return res.status(201).json(blog);
    }

    findByUser = async (req: Request, res: Response) => {
        let limit = 6;
        let offset = 0;
        let page = 1;
        if (req.query.page) {
            page = +req.query.page;
            offset = (+page - 1) * limit;
        }
        let totalBlogs = await Blog.countDocuments({Account: Number(req.params.id)});
        let totalPage = Math.ceil(totalBlogs / limit);
        let blogs = await blogService.findByUser(req.params.id, limit, offset);
        return res.status(201).json({
            blogs: blogs,
            currentPage: page,
            totalPage: totalPage
        });
    }
    findTop4 = async (req: Request, res: Response) => {
        let blogs = await blogService.findTop4();
        return res.status(201).json(blogs);
    }
}

export default new BlogController();