import { RouteObject } from "react-router-dom";
import HomePage from "../pages/HomePage";

export const HomeRouter: RouteObject = {
  index: true,
  path: "/home",
  element: <HomePage></HomePage>,
};
