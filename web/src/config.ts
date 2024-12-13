import type { z } from "astro:content";
import type { ConfigSchema } from "./config.schema";

const production = process.env.NODE_ENV === "production";

export const config: z.output<typeof ConfigSchema> = {
	production,
	apiUrl: production ? "https://api.vspace.one" : "http://localhost:8080",
	publicMapboxToken:
		"pk.eyJ1IjoiZW5yaWNvYnVlaGxlciIsImEiOiJjazJuZjMzem4wcG9hM21sbndjYXRpOGVvIn0.WCohYT2726jz0yNOteKnRA",
};
