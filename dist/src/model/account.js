"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = exports.accountSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_sequence_1 = __importDefault(require("mongoose-sequence"));
const mongoose_2 = __importDefault(require("mongoose"));
exports.accountSchema = new mongoose_1.Schema({
    _id: Number,
    firstName: String,
    lastName: String,
    address: String,
    phone: String,
    avatar: String,
    username: {
        type: String,
        unique: true
    },
    password: String,
    create_time: Date,
    update_time: Date,
    isActive: Boolean
});
const AutoIncrement = (0, mongoose_sequence_1.default)(mongoose_2.default);
exports.accountSchema.plugin(AutoIncrement, { id: 'account_counter', inc_field: '_id' });
const Account = (0, mongoose_1.model)('Account', exports.accountSchema);
exports.Account = Account;
//# sourceMappingURL=account.js.map