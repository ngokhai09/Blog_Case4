import {Request, Response} from "express";
import blogCategoryService from "../service/blog-category-service";

class BlogCategoryController {
    save = async (req: Request, res: Response) => {
        let blogCategory = req.body;
        blogCategory = await blogCategoryService.save(blogCategory);
        return res.status(201).json(blogCategory);
    }
    findAll = async (req: Request, res: Response) => {
        let blogCategory = await blogCategoryService.findAll();
        return res.status(200).json(blogCategory)
    }
}
export default new  BlogCategoryController();
