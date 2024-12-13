import { hc } from "hono/client";
import type { AppType } from "@vspaceone/api/app.ts";
import { config } from "@/config";

export const client = hc<AppType>(config.apiUrl);
