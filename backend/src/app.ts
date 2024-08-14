
const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
import { setRoutes } from "./routes/routes";

import { DbConf } from "./conf/dbConf";

export class App{
    private static express:any=express();
    private static port:number | string | undefined=3100;
    constructor(){        
    }
    public static startApp(){
        this.express.use(bodyParser.urlencoded({extended:false}));
        this.express.use(bodyParser.json());
        this.express.use(cors());
        this.express.use("/api",setRoutes())

        try {
            this.express.listen(this.port,()=>{
                console.log("Server listening at port: ",this.port)
                DbConf.connectDb();
            })
        } catch (error) {
            console.error("Error generating server",error);
            process.exit(1)
        }
    }
}