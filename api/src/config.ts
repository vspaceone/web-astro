import type { z } from "zod";
import type ConfigSchema from "./config.schema";

const production = process.env.NODE_ENV === "production";

export const config: z.output<typeof ConfigSchema> = {
	publicUrl: production ? "https://api.vspace.one" : "http://localhost:8080",
	frontendPublicUrl: production
		? "https://vspace.one"
		: "http://localhost:4321",
	cors: {
		origin: production
			? ["https://vspace.one", "https://www.vspace.one"]
			: ["http://localhost:4321"],
	},
	production,
};
