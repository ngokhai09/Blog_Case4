"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const account_router_1 = require("./account-router");
const blog_router_1 = require("./blog-router");
exports.router = (0, express_1.Router)();
exports.router.use('/accounts', account_router_1.accountRouter);
exports.router.use('/blog', blog_router_1.blogRouter);
//# sourceMappingURL=router.js.map