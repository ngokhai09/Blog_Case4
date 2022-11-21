"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const account_service_1 = __importDefault(require("../service/account-service"));
class AccountController {
    constructor() {
        this.register = async (req, res) => {
            let account = req.body;
            account = await account_service_1.default.addAccount(account);
            return res.status(201).json(account);
        };
        this.login = async (req, res) => {
            let account = req.body;
            let token = await account_service_1.default.getToken(account);
            return res.status(200).json({
                token: token
            });
        };
    }
}
exports.default = new AccountController();
//# sourceMappingURL=account-controller.js.map