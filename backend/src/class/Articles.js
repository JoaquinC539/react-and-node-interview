"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
const mongoose = require('mongoose');
const mongoose_1 = require("mongoose");
const articleSchema = new mongoose_1.Schema({
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: Date
});
exports.Article = (0, mongoose_1.model)('Article', articleSchema);
