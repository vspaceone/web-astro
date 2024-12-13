import { hc } from "hono/client";
import type { AppType } from "@vspaceone/api/app.ts";

export const client = hc<AppType>("http://localhost:8080/");
