import type { InputValue } from '../runtime.js';


export type MeListDeletionRequestsInput = { "status"?: InputValue<"pending_review" | "processing" | "completed" | "rejected" | "failed">; /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
