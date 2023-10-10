import { catchAsync } from "../errors/index.js";
import {
  CreatePlaneSchema,
  UpdatePlaneSchema,
} from "../schemas/plane.schema.js";
import Plane from "../models/plane.model.js";

// buscar todos los aviones
export const findAllPlanes = catchAsync(async (req, res) => {
  const planes = await Plane.findAll();
  return res.status(200).json(planes);
});

//buscar un avión por su ID
export const findPlaneById = catchAsync(async (req, res) => {
  const { planeId } = req.params;
  const plane = await Plane.findByPk(planeId);
  return res.status(200).json(plane);
});

// crear un avión
export const createPlane = catchAsync(async (req, res) => {
  const planeData = CreatePlaneSchema.parse(req.body);
  const plane = await Plane.create(planeData);
  return res.status(201).json(plane);
});

// actualizar un avión por su ID
export const updatePlane = catchAsync(async (req, res) => {
  const { planeId } = req.params;
  const planeData = UpdatePlaneSchema.parse(req.body);
  await Plane.update(planeData, {
    where: { plane_id: planeId },
  });
  return res.status(200).json({ message: "Plane updated successfully" });
});

// eliminar un avión por su ID
export const deletePlane = catchAsync(async (req, res) => {
  const { planeId } = req.params;
  await Plane.destroy({
    where: { plane_id: planeId },
  });
  return res.status(204).json(null);
});
