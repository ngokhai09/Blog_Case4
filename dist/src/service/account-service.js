"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ID_USER = void 0;
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
                return "Fail";
            }
            else {
                const comparePassword = await bcrypt_1.default.compare(account.password, accountFind.password);
                if (!comparePassword) {
                    return "Fail";
                }
                else {
                    const payload = {
                        username: accountFind.username,
                        idUser: accountFind._id,
                    };
                    exports.ID_USER = accountFind._id;
                    return await jsonwebtoken_1.default.sign(payload, auth_middleware_1.SECRET_KEY, {
                        expiresIn: 36000
                    });
                }
            }
        };
        this.findUser = async (id) => {
            let user = await account_1.Account.findOne({ _id: id });
            return user;
        };
        this.updateAccount = async (id, account) => {
            let accountEdit = await account_1.Account.findByIdAndUpdate(id, account);
            accountEdit = await account_1.Account.findOne({ _id: id });
            return accountEdit;
        };
    }
}
exports.default = new AccountService();
//# sourceMappingURL=account-service.js.map