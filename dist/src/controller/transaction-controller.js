"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transaction_1 = require("../model/transaction");
class TransactionController {
    constructor() {
        this.getAll = async (req, res) => {
            let transactions = await transaction_1.Transaction.find();
            res.status(200).json(transactions);
        };
        this.addTransaction = async (req, res, next) => {
            try {
                let transaction = req.body;
                transaction = await transaction_1.Transaction.create(transaction_1.Transaction);
                let newTransaction = await transaction_1.Transaction.findById(transaction._id);
                res.status(201).json(newTransaction);
            }
            catch (error) {
                next(error);
            }
        };
        this.deleteTransaction = async (req, res, next) => {
            let id = req.params.id;
            try {
                let transaction = await transaction_1.Transaction.findById(id);
                if (!transaction) {
                    res.status(404).json();
                }
                else {
                    transaction.delete();
                    res.status(204).json();
                }
            }
            catch (error) {
                next(error);
            }
        };
        this.getTransaction = async (req, res, next) => {
            let id = req.params.id;
            try {
                let transaction = await transaction_1.Transaction.findById(id);
                if (!transaction) {
                    res.status(404).json();
                }
                else {
                    res.status(200).json(transaction);
                }
            }
            catch (error) {
                next(error);
            }
        };
        this.updateTransaction = async (req, res) => {
            let id = req.params.id;
            let transaction = await transaction_1.Transaction.findById(id);
            if (!transaction) {
                res.status(404).json();
            }
            else {
                let data = req.body;
                await transaction_1.Transaction.findOneAndUpdate({
                    _id: id
                }, data);
                data._id = id;
                transaction = await transaction_1.Transaction.findById(id);
                res.status(200).json(transaction);
            }
        };
    }
}
exports.default = new TransactionController();
//# sourceMappingURL=transaction-controller.js.map