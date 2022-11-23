import {Request, Response} from "express";
import accountService from "../service/account-service";
import blogService from "../service/blog-service";

class BlogController {
    store = async (req: Request, res: Response) => {
        let blog = req.body;
        blog = await blogService.addBlog(blog);
        return res.status(201).json(blog)
    }
    index = async (req: Request, res: Response)=>{
        let blogs = await blogService.findAll();
        return res.status(201).json(blogs);
    }
    show = async (req: Request, res: Response)=>{
        let id = req.params.id;
        let blog = await blogService.findById(id);
        return res.status(201).json(blog);
    }
    destroy = async (req: Request, res: Response)=>{

    }
    update = async (req: Request, res: Response)=>{

    }
}

export default new BlogController();