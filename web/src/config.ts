import type { z } from "astro:content";
import type { ConfigSchema } from "./config.schema";

export const config: z.output<typeof ConfigSchema> = {
	publicMapboxToken:
		"pk.eyJ1IjoiZW5yaWNvYnVlaGxlciIsImEiOiJjazJuZjMzem4wcG9hM21sbndjYXRpOGVvIn0.WCohYT2726jz0yNOteKnRA",
};
