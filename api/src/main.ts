import { createLogger } from "./lib/logger";
import { createServer } from "./server";

const logger = createLogger("Main");

logger.info("Creating server");

createServer();
