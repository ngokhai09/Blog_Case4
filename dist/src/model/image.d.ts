import mongoose from "mongoose";
export interface IImage {
    _id?: number;
    description?: string;
    link?: string;
}
declare const Image: mongoose.Model<IImage, {}, {}, {}, any>;
export { Image };
