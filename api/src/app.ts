import { Hono } from "hono";
import eventsController from "./events/events.controller";
import infoController from "./info/info.controller";
import { cors } from "hono/cors";
import { config } from "./config";

const app = new Hono();

const corsMiddleware = cors({
	origin: config.frontendPublicUrl,
	allowMethods: ["POST", "GET", "OPTIONS"],
	allowHeaders: ["Content-Type"],
});

const routes = app
	.use("*", corsMiddleware)
	.route("/events", eventsController)
	.route("/info", infoController);

export { app };
export type AppType = typeof routes;
