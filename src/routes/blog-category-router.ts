import {Router} from "express";
import blogCategoryController from "../controller/blog-category-controller";

export const blogCategoryRouter = Router();
blogCategoryRouter.get('', blogCategoryController.findAll);
blogCategoryRouter.post('', blogCategoryController.save);