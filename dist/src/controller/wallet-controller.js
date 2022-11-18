"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Wallet_1 = require("../model/Wallet");
class WalletController {
    constructor() {
        this.getAll = async (req, res) => {
            let wallets = await Wallet_1.Wallet.find().populate('user', 'name');
            res.status(200).json(wallets);
        };
        this.addWallet = async (req, res, next) => {
            try {
                let wallet = req.body;
                wallet = await Wallet_1.Wallet.create(wallet);
                let newWallet = await Wallet_1.Wallet.findById(wallet._id).populate('user', 'name');
                res.status(201).json(newWallet);
            }
            catch (error) {
                next(error);
            }
        };
        this.deleteWallet = async (req, res, next) => {
            let id = req.params.id;
            try {
                let wallet = await Wallet_1.Wallet.findById(id);
                if (!wallet) {
                    res.status(404).json();
                }
                else {
                    wallet.delete();
                    res.status(204).json();
                }
            }
            catch (error) {
                next(error);
            }
        };
        this.getWallet = async (req, res, next) => {
            let id = req.params.id;
            try {
                let wallet = await Wallet_1.Wallet.findById(id).populate('user', 'name');
                if (!wallet) {
                    res.status(404).json();
                }
                else {
                    res.status(200).json(wallet);
                }
            }
            catch (error) {
                next(error);
            }
        };
        this.updateWallet = async (req, res) => {
            let id = req.params.id;
            let wallet = await Wallet_1.Wallet.findById(id);
            if (!wallet) {
                res.status(404).json();
            }
            else {
                let data = req.body;
                await Wallet_1.Wallet.findOneAndUpdate({
                    _id: id
                }, data);
                data._id = id;
                wallet = await Wallet_1.Wallet.findById(id).populate('user', 'name');
                res.status(200).json(wallet);
            }
        };
    }
}
exports.default = new WalletController();
//# sourceMappingURL=wallet-controller.js.map