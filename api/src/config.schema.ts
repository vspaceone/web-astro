import z from "zod";

const ConfigSchema = z.object({
	publicUrl: z.string(),
	frontendPublicUrl: z.string(),
	production: z.boolean(),
});

export default ConfigSchema;
