import {Router} from "express";
import categoryController from "../controller/category-controller";


export const categoryRouter = Router();
categoryRouter.get('', categoryController.findAll);
categoryRouter.post('', categoryController.save);