"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = require("../model/account");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_middleware_1 = require("../middleware/auth-middleware");
class AccountService {
    constructor() {
        this.addAccount = async (account) => {
            account.password = await bcrypt_1.default.hash(account.password, 10);
            return await account_1.Account.create(account);
        };
        this.getToken = async (account) => {
            const accountFind = await account_1.Account.findOne({ username: account.username });
            if (!accountFind) {
                return "Account does not exist";
            }
            else {
                const comparePassword = await bcrypt_1.default.compare(account.password, accountFind.password);
                if (!comparePassword) {
                    return "Wrong Password";
                }
                else {
                    const payload = {
                        username: accountFind.username,
                        id: accountFind._id,
                    };
                    return await jsonwebtoken_1.default.sign(payload, auth_middleware_1.SECRET_KEY, {
                        expiresIn: 36000
                    });
                }
            }
        };
    }
}
exports.default = new AccountService();
//# sourceMappingURL=account-service.js.map