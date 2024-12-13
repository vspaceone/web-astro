import { Hono } from "hono";
import { createLogger } from "../lib/logger";
import { InfoService } from "./info.service";

const logger = createLogger("InfoController");

const infoService = new InfoService();

const infoController = new Hono().get("/", async (c) => {
	logger.debug("Called get on infoController");

	const info = await infoService.get();

	logger.debug("Successfully fetched info");

	return c.json(info);
});

export default infoController;
