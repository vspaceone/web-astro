import { z } from "zod";

export const ConfigSchema = z.object({
	publicMapboxToken: z.string(),
});
