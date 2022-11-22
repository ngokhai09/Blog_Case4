import { Request, Response } from "express";
declare class BlogController {
    save: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: BlogController;
export default _default;
