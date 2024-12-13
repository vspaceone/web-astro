import z from "zod";

const ConfigSchema = z.object({
	publicUrl: z.string(),
	frontendPublicUrl: z.string(),
	production: z.boolean(),
	cors: z.object({
		origin: z.array(z.string()).min(1),
	}),
});

export default ConfigSchema;
