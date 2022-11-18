"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../model/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthController {
    async login(req, res, next) {
        try {
            let user = await user_1.User.findOne({ email: req.body.email });
            if (user) {
                bcrypt_1.default.compare(req.body.password, user.password).then((result) => {
                    let checkPassword = result;
                    console.log(checkPassword);
                    if (!checkPassword) {
                        res.status(400).json('Wrong password. Please try again');
                    }
                    else {
                        let accessToken = jsonwebtoken_1.default.sign({
                            userId: user._id,
                            userName: user.name
                        }, process.env.ACCESS_TOKEN_SECRET || "secret", { expiresIn: "3d" });
                        return res.status(300).json(`User ${user.name} has been login successfully ------ And access token is :  ${accessToken}`);
                    }
                });
            }
            else {
                return res.status(404).json('Can not find User');
            }
        }
        catch (err) {
            next(err);
        }
    }
    async register(req, res, next) {
        try {
            req.body.password = await bcrypt_1.default.hash(req.body.password, 10);
            let userInfo = {
                name: req.body.name,
                avatar: req.body.avatar,
                username: req.body.username,
                password: req.body.password,
                phone: req.body.phone,
                email: req.body.email,
                address: req.body.address
            };
            let newUser = await user_1.User.create(userInfo);
            res.status(300).json(`User ${newUser.username} has been created`);
        }
        catch (err) {
            next(err);
        }
    }
}
exports.default = new AuthController();
//# sourceMappingURL=auth-controller.js.map