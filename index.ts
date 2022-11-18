import express from 'express';
import mongoose from "mongoose";
import {router} from "./src/routes/router";
import bodyParser from "body-parser";
import session from "express-session"
import { Blog, blogSchema } from './src/model/blog';
import { Category } from './src/model/categories';


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
// app.use('', router)
app.use(express.static('public'))
mongoose.connect('mongodb+srv://root:Blog%40123456@cluster0.f2ybqzw.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log('Connect success!');
}).catch(() => {
    console.log('Connect error!');
});

app.post("/category", (req, res)=>{
    let category = new Category({
        _id: req.body.id,
        name: req.body.name
    });
    category.save();
    res.status(204).json();
})
app.post('', async (req, res)=>{
    let blog = new Blog({
        title: req.body.title,
        Category: req.body.category
    })
    blog.save();
    res.status(200).json("Success");
})
app.get("", async (req, res)=>{
    let categories = await Blog.find().populate('Category', 'name');
    console.log(categories);
    
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})