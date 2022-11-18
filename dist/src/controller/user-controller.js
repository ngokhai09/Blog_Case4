"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../model/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserController {
    constructor() {
        this.getAll = async (req, res) => {
            let users = await user_1.User.find();
            res.status(200).json(users);
        };
        this.addUser = async (req, res, next) => {
            try {
                req.body.password = await bcrypt_1.default.hash(req.body.password, 10);
                let user = {
                    name: req.body.name,
                    avatar: req.body.avatar,
                    username: req.body.username,
                    password: req.body.password,
                    phone: req.body.phone,
                    email: req.body.email,
                    address: req.body.address
                };
                let newUser = await user_1.User.create(user);
                return res.status(200).json(`User ${newUser.name} has been created`);
            }
            catch (error) {
                next(error);
            }
        };
        this.deleteUser = async (req, res, next) => {
            let id = req.params.id;
            try {
                let user = await user_1.User.findById(id);
                if (!user) {
                    res.status(404).json();
                }
                else {
                    user.delete();
                    res.status(204).json();
                }
            }
            catch (error) {
                next(error);
            }
        };
        this.getUser = async (req, res, next) => {
            let id = req.params.id;
            try {
                let user = await user_1.User.findById(id);
                if (!user) {
                    res.status(404).json();
                }
                else {
                    res.status(200).json(user);
                }
            }
            catch (error) {
                next(error);
            }
        };
        this.updateUser = async (req, res) => {
            let id = req.params.id;
            let user = await user_1.User.findById(id);
            if (!user) {
                res.status(404).json({ message: 'User not found' });
            }
            else {
                let data = req.body;
                await user_1.User.findOneAndUpdate({
                    _id: id
                }, data);
                res.status(200).json({ message: 'Update User Success' });
            }
        };
    }
}
exports.default = new UserController();
//# sourceMappingURL=user-controller.js.map