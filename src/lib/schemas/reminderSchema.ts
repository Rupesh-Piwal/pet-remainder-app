import { z } from "zod";

export const reminderSchema = z.object({
  pet: z.enum(["Browny", "Whisky", "Buddy"]),
  category: z.enum(["General", "Feeding", "Medicine", "Exercise"]),
  reminderFor: z
    .string()
    .min(1)
    .max(100, "Reminder must be under 100 characters"),
  notes: z.string().optional(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  time: z.string(),
  frequency: z.enum(["Everyday", "Monthly", "Yearly"]),
});
