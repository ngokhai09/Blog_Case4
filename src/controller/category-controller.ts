import {Request, Response} from "express";
import categoryService from "../service/category-service";

class CategoryController {
    findAll = async (req: Request, res: Response) => {
        let categories = await categoryService.findAll();
        return res.status(200).json(categories);
    }
    save = async (req: Request, res: Response) => {
        let category = await categoryService.save(req.body);
        return res.status(201).json(category);
    }
}
export default new CategoryController();