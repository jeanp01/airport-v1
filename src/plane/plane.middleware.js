import { AppError, catchAsync } from "../errors/index.js";
import Plane from "../models/plane.model.js";

export const validateExistPlane = catchAsync(async (req, res, next) => {
  const { planeId } = req.params;

  try {
    const plane = await Plane.findByPk(planeId);

    if (!plane) {
      return next(new AppError(`Plane not found with ID: ${planeId}`, 404));
    }

    req.plane = plane;
    next();
  } catch (error) {
    return next(
      new AppError("An error occurred while fetching plane data", 500)
    );
  }
});
