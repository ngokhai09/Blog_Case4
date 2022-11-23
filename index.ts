import express from 'express';
import mongoose from "mongoose";
import {router} from "./src/routes/router";
import bodyParser from "body-parser";
import cors from 'cors';
import session from "express-session"
const PORT = 8080;
const app = express();
app.set('views', './src/views/')
app.set('view engine', 'ejs')

app.use(express.json());
app.use(bodyParser.json());
// app.use(session({
//     secret: 'SECRET',
//     resale: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 60 * 60 * 1000 }
// }));
app.use(bodyParser.urlencoded({extended: false}));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(fileUpload({
//     createParentPath: true
// }));
app.use(cors());
app.use('', router)
app.use(express.static('public'))
mongoose.connect('mongodb+srv://root:Blog%40123456@cluster0.f2ybqzw.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log('Connect success!');
}).catch(() => {
    console.log('Connect error!');
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})