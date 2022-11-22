import {Router} from "express";
import {accountRouter} from "./account-router";
import {blogRouter} from "./blog-router";
import {categoryRouter} from "./category-router";
import {blogCategoryRouter} from "./blog-category-router";
export const router = Router();

router.use('/accounts', accountRouter);
router.use('/blogs', blogRouter);
router.use('/categories', categoryRouter);
router.use('/blogCategory', blogCategoryRouter);
