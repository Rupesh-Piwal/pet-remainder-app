// app/actions/createReminder.ts
"use server";

import { prisma } from "@/lib/prisma";
import { reminderSchema } from "@/lib/schemas/reminderSchema";

export async function createReminder(
  prevState: { error?: string; success?: boolean },
  formData: FormData
) {
  try {
    const raw = {
      pet: formData.get("pet"),
      category: formData.get("category"),
      reminderFor: formData.get("reminderFor"),
      notes: formData.get("notes"),
      startDate: formData.get("startDate"),
      endDate: formData.get("endDate"),
      time: formData.get("time"),
      frequency: formData.get("frequency"),
    };

    const result = reminderSchema.safeParse(raw);

    if (!result.success) {
      const errorMsg = result.error.errors[0]?.message || "Invalid form data";
      return { error: errorMsg };
    }

    const data = result.data;

    await prisma.reminder.create({ data });

    return { success: true };
  } catch (err) {
    return { error: "Something went wrong. Please try again." };
  }
}
