import { Router } from "express";
import usersRoute from "./user.router";

const router = Router();

const defaultRoutes = [
  {
    path: "/users",
    route: usersRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
