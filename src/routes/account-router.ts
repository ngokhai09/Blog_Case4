import {Router} from "express";
import AccountController from "../controller/account-controller";
export const accountRouter = Router();
accountRouter.post('/register', AccountController.register);
accountRouter.post('/login', AccountController.login);
accountRouter.get('/:id', AccountController.findAccount);
accountRouter.put('/:id', AccountController.editAccount);