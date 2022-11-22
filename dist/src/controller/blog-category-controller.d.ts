import { Request, Response } from "express";
declare class BlogCategoryController {
    save: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: BlogCategoryController;
export default _default;
