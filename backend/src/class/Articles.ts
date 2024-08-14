const mongoose = require('mongoose');
import { Schema,model } from "mongoose";

const articleSchema=new Schema({
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: Date
});
export const Article=model('Article', articleSchema);