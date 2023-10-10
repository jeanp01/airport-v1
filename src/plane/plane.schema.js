import { z } from "zod";

//pa creación
export const CreatePlaneSchema = z.object({
  plane_number: z.number().int().min(1),
  model: z.string().min(1).max(20),
  max_capacity: z.number().int().min(1),
  airline: z.string().min(1).max(50),
  status: z.boolean().optional(),
});

//pa actualizacion
export const UpdatePlaneSchema = z.object({
  plane_number: z.number().int().min(1).optional(),
  model: z.string().min(1).max(20).optional(),
  max_capacity: z.number().int().min(1).optional(),
  airline: z.string().min(1).max(50).optional(),
  status: z.boolean().optional(),
});
