"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_router_1 = __importDefault(require("./user.router"));
const router = (0, express_1.Router)();
const defaultRoutes = [
    {
        path: "/users",
        route: user_router_1.default,
    },
];
defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});
exports.default = router;
