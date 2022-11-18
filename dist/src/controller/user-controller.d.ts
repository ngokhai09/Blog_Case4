import { NextFunction, Request, Response } from "express";
declare class UserController {
    getAll: (req: Request, res: Response) => Promise<void>;
    addUser: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
    deleteUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateUser: (req: Request, res: Response) => Promise<void>;
}
declare const _default: UserController;
export default _default;
