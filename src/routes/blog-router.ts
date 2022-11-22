import {Router} from "express";
import blogController from "../controller/blog-controller";

export const blogRouter = Router();
blogRouter.get('', blogController.findAll);
blogRouter.post('', blogController.save);