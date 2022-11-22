"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogCategoryRouter = void 0;
const express_1 = require("express");
const blog_category_controller_1 = __importDefault(require("../controller/blog-category-controller"));
exports.blogCategoryRouter = (0, express_1.Router)();
exports.blogCategoryRouter.get('', blog_category_controller_1.default.findAll);
exports.blogCategoryRouter.post('', blog_category_controller_1.default.save);
//# sourceMappingURL=blog-category-router.js.map