import { catchAsync } from "../errors/index.js";
import {
  CreateFlightSchema,
  UpdateFlightSchema,
} from "../schemas/flight.schema.js";
import Flight from "../models/flight.model.js";

// buscar todos los vuelos
export const findAllFlights = catchAsync(async (req, res) => {
  const flights = await Flight.findAll();
  return res.status(200).json(flights);
});

// buscar un vuelo por su ID
export const findFlightById = catchAsync(async (req, res) => {
  const { flightId } = req.params;
  const flight = await Flight.findByPk(flightId);
  return res.status(200).json(flight);
});

//crear un vuelo
export const createFlight = catchAsync(async (req, res) => {
  const flightData = CreateFlightSchema.parse(req.body);
  const flight = await Flight.create(flightData);
  return res.status(201).json(flight);
});

// actualizar un vuelo por su ID
export const updateFlight = catchAsync(async (req, res) => {
  const { flightId } = req.params;
  const flightData = UpdateFlightSchema.parse(req.body);
  await Flight.update(flightData, {
    where: { flight_id: flightId },
  });
  return res.status(200).json({ message: "Flight updated successfully" });
});

//eliminar un vuelo por su ID
export const deleteFlight = catchAsync(async (req, res) => {
  const { flightId } = req.params;
  await Flight.destroy({
    where: { flight_id: flightId },
  });
  return res.status(204).json(null);
});
