"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes_1 = require("./routes/routes");
const dbConf_1 = require("./conf/dbConf");
class App {
    constructor() {
    }
    static startApp() {
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(bodyParser.json());
        this.express.use(cors());
        this.express.use("/api", (0, routes_1.setRoutes)());
        try {
            this.express.listen(this.port, () => {
                console.log("Server listening at port: ", this.port);
                dbConf_1.DbConf.connectDb();
            });
        }
        catch (error) {
            console.error("Error generating server", error);
            process.exit(1);
        }
    }
}
exports.App = App;
App.express = express();
App.port = 3100;
