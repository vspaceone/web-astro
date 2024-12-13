import type { z } from "zod";
import type { InfoEntity } from "./info.schema";

export class InfoService {
	async get() {
		const response = await fetch("https://vspace.one/spaceapi.json");
		const data: z.output<typeof InfoEntity> = await response.json();

		return data;
	}
}
