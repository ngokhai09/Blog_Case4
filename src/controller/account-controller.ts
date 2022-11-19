import {Request, Response} from "express";
import accountService from "../service/account-service";

class AccountController {
    register = async (req: Request, res: Response) => {
        let account = req.body;
        account = await accountService.addAccount(account);
        return res.status(201).json(account)
    }
}
export default new AccountController();