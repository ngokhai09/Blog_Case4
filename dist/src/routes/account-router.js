"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountRouter = void 0;
const express_1 = require("express");
const account_controller_1 = __importDefault(require("../controller/account-controller"));
exports.accountRouter = (0, express_1.Router)();
exports.accountRouter.post('/register', account_controller_1.default.register);
//# sourceMappingURL=account-router.js.map