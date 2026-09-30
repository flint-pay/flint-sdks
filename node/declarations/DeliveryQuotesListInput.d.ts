import type { InputValue } from '../runtime.js';


export type DeliveryQuotesListInput = { "checkout_session_id"?: InputValue<string>; "order_id"?: InputValue<string>; "status"?: InputValue<"active" | "consumed" | "stale" | "expired" | "revoked">; "evaluation_status"?: InputValue<"complete" | "incomplete" | "degraded">; "created_after"?: InputValue<string>; "created_before"?: InputValue<string>; /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
