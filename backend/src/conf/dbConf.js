"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbConf = void 0;
const mongoose = require('mongoose');
require("dotenv").config();
class DbConf {
    static connectDb() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield mongoose.connect(process.env.MONGO_URL);
                console.log("Connection to mongoDB successful");
            }
            catch (error) {
                console.error("Error connection to MongoDB", error);
            }
        });
    }
}
exports.DbConf = DbConf;
