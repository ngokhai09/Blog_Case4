"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = exports.blogSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_sequence_1 = __importDefault(require("mongoose-sequence"));
const mongoose_2 = __importDefault(require("mongoose"));
exports.blogSchema = new mongoose_1.Schema({
    _id: Number,
    content: String,
    title: String,
    image: String,
    Account: {
        type: Number,
        ref: 'Account'
    },
    time_create: Date,
    time_update: Date,
    status: Boolean,
    likeCnt: Number,
    commentCnt: Number
});
const AutoIncrement = (0, mongoose_sequence_1.default)(mongoose_2.default);
exports.blogSchema.plugin(AutoIncrement, { id: 'blog_counter', inc_field: '_id' });
const Blog = (0, mongoose_1.model)('Blog', exports.blogSchema);
exports.Blog = Blog;
//# sourceMappingURL=blog.js.map