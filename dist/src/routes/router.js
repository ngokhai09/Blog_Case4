"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const account_router_1 = require("./account-router");
exports.router = (0, express_1.Router)();
exports.router.use('/accounts', account_router_1.accountRouter);
//# sourceMappingURL=router.js.map