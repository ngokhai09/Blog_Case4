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
        let totalBlogs = await Blog.countDocuments({});
        let totalPage = Math.ceil(totalBlogs / totalBlogs);
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
    }

    findByUser = async (req: Request, res: Response) => {
        let blogs = await blogService.findByUser(req.params.id);
        return res.status(201).json(blogs);
    }
    findTop4 = async (req: Request, res: Response) => {
        let blogs = await blogService.findTop4();
        return res.status(201).json(blogs);
    }
}

export default new BlogController();