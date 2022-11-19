"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = require("../model/account");
const bcrypt_1 = __importDefault(require("bcrypt"));
class AccountService {
    constructor() {
        this.addAccount = async (account) => {
            account.password = await bcrypt_1.default.hash(account.password, 10);
            return await account_1.Account.create(account);
        };
    }
}
exports.default = new AccountService();
//# sourceMappingURL=account-service.js.map