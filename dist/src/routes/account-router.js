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
exports.accountRouter.post('/login', account_controller_1.default.login);
exports.accountRouter.get('/:id', account_controller_1.default.findAccount);
exports.accountRouter.put('/:id', account_controller_1.default.editAccount);
//# sourceMappingURL=account-router.js.map