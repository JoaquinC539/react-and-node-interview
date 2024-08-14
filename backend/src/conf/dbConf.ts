const mongoose = require('mongoose');
require("dotenv").config();
export class DbConf{
    public static async connectDb():Promise<void>{
        try {
            await mongoose.connect(process.env.MONGO_URL);
            console.log("Connection to mongoDB successful")
        } catch (error) {
            console.error("Error connection to MongoDB",error)
        }
        
    }
}