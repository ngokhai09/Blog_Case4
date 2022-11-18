import {Router} from "express";
import { nextTick } from "process";

export const router = Router();


router.get("/", (req, res)=>{
    res.send("Hello");
})

