import { Router } from "express";

import {
  findAllPlanes,
  findPlaneById,
  createPlane,
  updatePlane,
  deletePlane,
} from "./plane.controller.js";
import { protect } from "../auth/auth.middleware.js";

export const router = express.Router();

router.route("/").get(findAllPlanes).post(protect, createPlane);

router
  .route("/:planeId")
  .get(findPlaneById)
  .patch(protect, updatePlane)
  .delete(protect, deletePlane);
