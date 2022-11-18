import { NextFunction, Request, Response } from "express";
declare class TransactionController {
    getAll: (req: Request, res: Response) => Promise<void>;
    addTransaction: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteTransaction: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getTransaction: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateTransaction: (req: Request, res: Response) => Promise<void>;
}
declare const _default: TransactionController;
export default _default;
