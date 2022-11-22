import {Request, Response} from "express";
import blogService from "../service/blog-service";

class BlogController {
    save = async (req: Request, res: Response) => {
        let blog = req.body;
        blog = await blogService.save(blog);
        return res.status(201).json(blog);
    }
    findAll = async (req: Request, res: Response) => {
        let blogs = await blogService.findAll();
        return res.status(201).json(blogs);
    }
}

export default new BlogController();