"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const blog_1 = require("./src/model/blog");
const categories_1 = require("./src/model/categories");
const PORT = 8080;
const app = (0, express_1.default)();
app.set('views', './src/views/');
app.set('view engine', 'ejs');
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static('public'));
mongoose_1.default.connect('mongodb+srv://root:Blog%40123456@cluster0.f2ybqzw.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log('Connect success!');
}).catch(() => {
    console.log('Connect error!');
});
app.post("/category", (req, res) => {
    let category = new categories_1.Category({
        _id: req.body.id,
        name: req.body.name
    });
    category.save();
    res.status(204).json();
});
app.post('', async (req, res) => {
    let blog = new blog_1.Blog({
        title: req.body.title,
        Category: req.body.category
    });
    blog.save();
    res.status(200).json("Success");
});
app.get("", async (req, res) => {
    let categories = await blog_1.Blog.find().populate('Category', 'name');
    console.log(categories);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map