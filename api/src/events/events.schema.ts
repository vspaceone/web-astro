import { z } from "zod";

export const EventEntity = z.object({
	title: z.string(),
	start: z.coerce.date().optional(),
	end: z.coerce.date().optional(),
	location: z.string(),
	description: z.string().optional(),
	link: z.string().optional(),
	download: z.string().optional(),
	isRecurring: z.boolean(),
});
