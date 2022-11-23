import {Router} from "express";
import {accountRouter} from "./account-router";
import {blogRouter} from "./blog-router";
export const router = Router();

router.use('/accounts', accountRouter);
router.use('/blog', blogRouter);

