"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = require("./src/routes/router");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const PORT = 8080;
const app = (0, express_1.default)();
app.set('views', './src/views/');
app.set('view engine', 'ejs');
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.use('', router_1.router);
app.use(express_1.default.static('public'));
mongoose_1.default.connect('mongodb+srv://root:Blog%40123456@cluster0.f2ybqzw.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log('Connect success!');
}).catch(() => {
    console.log('Connect error!');
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map