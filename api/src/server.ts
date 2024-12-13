import { serve } from "@hono/node-server";
import { createLogger } from "./lib/logger";
import { app } from "./app";

export type ServerOptions = {
	port?: number;
};

const logger = createLogger("Server");

export const createServer = (opts?: ServerOptions) => {
	logger.info("Starting server...");

	const port = opts?.port || 8080;

	const server = serve({
		fetch: app.fetch,
		port,
	});

	logger.info(`Listening on port ${port}`);

	const stop = async () => {
		logger.info("Stopping...");
		server.close();
	};

	return { server, stop };
};
