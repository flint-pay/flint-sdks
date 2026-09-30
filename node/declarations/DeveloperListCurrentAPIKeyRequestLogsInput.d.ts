import type { InputValue } from '../runtime.js';


export type DeveloperListCurrentAPIKeyRequestLogsInput = { /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "request_id"?: InputValue<string>; "http_method"?: InputValue<string>; "path_query"?: InputValue<string>; "resource_type"?: InputValue<string>; "resource_id"?: InputValue<string>; "status_bucket"?: InputValue<"all" | "success" | "client_error" | "server_error">; /** Format: date-time. Example: "2026-03-17T14:30:00Z". */ "created_after"?: InputValue<string | globalThis.Date>; /** Format: date-time. Example: "2026-03-17T14:30:00Z". */ "created_before"?: InputValue<string | globalThis.Date>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
