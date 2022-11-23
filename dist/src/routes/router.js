"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const account_router_1 = require("./account-router");
const blog_router_1 = require("./blog-router");
const category_router_1 = require("./category-router");
const blog_category_router_1 = require("./blog-category-router");
exports.router = (0, express_1.Router)();
exports.router.use('/accounts', account_router_1.accountRouter);
exports.router.use('/blogs', blog_router_1.blogRouter);
exports.router.use('/categories', category_router_1.categoryRouter);
exports.router.use('/blogCategory', blog_category_router_1.blogCategoryRouter);
//# sourceMappingURL=router.js.map