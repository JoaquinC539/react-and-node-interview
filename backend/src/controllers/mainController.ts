import  { Request,Response } from "express";
import { Article } from "../class/Articles";
export class MainController{    
    public static async index(req:Request,res:Response){
        const articles=await Article.find().exec();
        res.status(200).send(articles);
    }
}