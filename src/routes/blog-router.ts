import {Router} from "express";
import blogController from "../controller/blog-controller";
export const blogRouter = Router();
blogRouter.get('/', blogController.index);
blogRouter.get('/:id', blogController.show);
blogRouter.get('/user/:id', blogController.findByUser);
blogRouter.post('/', blogController.store);
blogRouter.put('/', blogController.update);
blogRouter.delete('/', blogController.destroy);