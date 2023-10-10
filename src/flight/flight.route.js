import { Router } from "express";

import {
  findAllFlights,
  findFlightById,
  createFlight,
  updateFlight,
  deleteFlight,
} from "./flight.controller.js";
import { protect } from "../auth/auth.middleware.js";

export const router = express.Router();

router.route("/").get(findAllFlights).post(protect, createFlight);

router
  .route("/:flightId")
  .get(findFlightById)
  .patch(protect, updateFlight)
  .delete(protect, deleteFlight);
