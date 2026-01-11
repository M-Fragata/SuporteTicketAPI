import { tickets } from "./ticketsRoutes.js";
import { parseRoutePath } from "../utils/parseRountPath.js"

export const routes = [...tickets].map((route) => ({
  ...route,
  path: parseRoutePath(route.path)
}))