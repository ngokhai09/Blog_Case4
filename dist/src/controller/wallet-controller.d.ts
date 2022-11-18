import { NextFunction, Request, Response } from "express";
declare class WalletController {
    getAll: (req: Request, res: Response) => Promise<void>;
    addWallet: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteWallet: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getWallet: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateWallet: (req: Request, res: Response) => Promise<void>;
}
declare const _default: WalletController;
export default _default;
