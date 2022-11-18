"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const money_type_1 = require("../model/money-type");
class MoneyTypeController {
    constructor() {
        this.getAll = async (req, res) => {
            let moneyTypes = await money_type_1.MoneyType.find();
            res.status(200).json(moneyTypes);
        };
        this.addMoneyType = async (req, res, next) => {
            try {
                let moneyType = req.body;
                moneyType = await money_type_1.MoneyType.create(moneyType);
                let newMoneyType = await money_type_1.MoneyType.findById(moneyType._id);
                res.status(201).json(newMoneyType);
            }
            catch (error) {
                next(error);
            }
        };
        this.deleteMoneyType = async (req, res, next) => {
            let id = req.params.id;
            try {
                let moneyType = await money_type_1.MoneyType.findById(id);
                if (!moneyType) {
                    res.status(404).json();
                }
                else {
                    moneyType.delete();
                    res.status(204).json();
                }
            }
            catch (error) {
                next(error);
            }
        };
        this.getMoneyType = async (req, res, next) => {
            let id = req.params.id;
            try {
                let moneyType = await money_type_1.MoneyType.findById(id);
                if (!moneyType) {
                    res.status(404).json();
                }
                else {
                    res.status(200).json(moneyType);
                }
            }
            catch (error) {
                next(error);
            }
        };
        this.updateMoneyType = async (req, res) => {
            let id = req.params.id;
            let moneyType = await money_type_1.MoneyType.findById(id);
            if (!moneyType) {
                res.status(404).json();
            }
            else {
                let data = req.body;
                await money_type_1.MoneyType.findOneAndUpdate({
                    _id: id
                }, data);
                data._id = id;
                moneyType = await money_type_1.MoneyType.findById(id);
                res.status(200).json(moneyType);
            }
        };
    }
}
exports.default = new MoneyTypeController();
//# sourceMappingURL=money-type-controller.js.map