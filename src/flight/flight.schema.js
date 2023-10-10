import { z } from "zod";

// pa creación
export const CreateFlightSchema = z.object({
  origin_id: z.number().int().min(1),
  destination_id: z.number().int().min(1),
  plane_id: z.number().int().min(1).optional(),
  departure_time: z.date(),
  check_in: z.date().optional(),
  status: z.enum(["pending", "completed", "canceled"]).optional(),
});

//  pa actualización
export const UpdateFlightSchema = z.object({
  origin_id: z.number().int().min(1).optional(),
  destination_id: z.number().int().min(1).optional(),
  plane_id: z.number().int().min(1).optional(),
  departure_time: z.date().optional(),
  check_in: z.date().optional(),
  status: z.enum(["pending", "completed", "canceled"]).optional(),
});
