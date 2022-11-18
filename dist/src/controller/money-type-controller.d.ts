import { NextFunction, Request, Response } from "express";
declare class MoneyTypeController {
    getAll: (req: Request, res: Response) => Promise<void>;
    addMoneyType: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteMoneyType: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getMoneyType: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateMoneyType: (req: Request, res: Response) => Promise<void>;
}
declare const _default: MoneyTypeController;
export default _default;
