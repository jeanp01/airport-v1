import { AppError, catchAsync } from "../errors/index.js";
import Flight from "../models/flight.model.js";

export const validateExistFlight = catchAsync(async (req, res, next) => {
  const { flightId } = req.params;

  try {
    const flight = await Flight.findByPk(flightId);

    if (!flight) {
      return next(new AppError(`Flight not found with ID: ${flightId}`, 404));
    }

    req.flight = flight;
    next();
  } catch (error) {
    return next(
      new AppError("An error occurred while fetching flight data", 500)
    );
  }
});
