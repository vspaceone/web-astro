import { z } from "zod";

export const InfoEntity = z.object({
	api: z.literal("0.13"),
	space: z.string(),
	logo: z.string().url(),
	url: z.string().url(),
	location: z.object({
		address: z.string(),
		lat: z.number(),
		lon: z.number(),
	}),
	contact: z.object({
		phone: z.string(),
		twitter: z.string(),
		email: z.string().email(),
	}),
	issue_report_channels: z.array(z.string()),
	state: z.object({
		open: z.boolean(),
		lastchange: z.number(),
	}),
	sensors: z.object({
		temperature: z.null(),
		humidity: z.null(),
	}),
});
