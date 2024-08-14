"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRoutes = void 0;
const express = require("express");
const mainController_1 = require("../controllers/mainController");
const setRoutes = () => {
    const routes = express.Router();
    routes.get("/articles", mainController_1.MainController.index);
    return routes;
};
exports.setRoutes = setRoutes;
