import {Router} from "express";
import {accountRouter} from "./account-router";
export const router = Router();

router.use('/accounts', accountRouter);

