import { Hono } from "hono";
import { createLogger } from "../lib/logger";
import { EventsService } from "./events.service";

const logger = createLogger("EventsController");

const eventsService = new EventsService();

const eventsController = new Hono().get("/", async (c) => {
	logger.debug("Called getAll on eventsController");

	const events = await eventsService.getAll();

	logger.debug("Successfully fetched all events");

	return c.json(events);
});

export default eventsController;
