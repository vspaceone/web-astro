import { z } from "zod";

export const ConfigSchema = z.object({
	apiUrl: z.string(),
	production: z.boolean(),
	publicMapboxToken: z.string(),
});
