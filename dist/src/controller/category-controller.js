"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const category_service_1 = __importDefault(require("../service/category-service"));
class CategoryController {
    constructor() {
        this.findAll = async (req, res) => {
            let categories = await category_service_1.default.findAll();
            return res.status(200).json(categories);
        };
        this.save = async (req, res) => {
            let category = await category_service_1.default.save(req.body);
            return res.status(201).json(category);
        };
    }
}
exports.default = new CategoryController();
//# sourceMappingURL=category-controller.js.map