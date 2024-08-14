const express=require("express");
import { MainController } from "../controllers/mainController";
export const setRoutes=()=>{
    const routes=express.Router();
    routes.get("/articles",MainController.index)
    return routes;

}