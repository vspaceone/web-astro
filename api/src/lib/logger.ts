import { type ILogObj, Logger as TLogger } from "tslog";

export function createLogger(name: string): Logger {
	return new TLogger<ILogObj>({ name });
}

export type Logger = TLogger<ILogObj>;
