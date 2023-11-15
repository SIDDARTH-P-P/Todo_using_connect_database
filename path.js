import { Router } from "express";
import * as fun from "./route_handler.js";

const router = Router();

router.route("/api").post(fun.add_data)
router.route("/api").get(fun.get_data)
router.route("/api").delete(fun.del_data)
router.route("/api").put(fun.edit_data);
export default router;