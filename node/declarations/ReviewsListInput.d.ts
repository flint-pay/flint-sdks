import type { InputValue } from '../runtime.js';


export type ReviewsListInput = { "status"?: InputValue<Array<"open" | "resolving" | "closed">>; "risk_level"?: InputValue<Array<"normal" | "elevated" | "highest" | "not_assessed">>; "payment_flow"?: InputValue<Array<"checkout" | "payment_link" | "invoice" | "subscription_initial" | "subscription_renewal" | "virtual_terminal" | "api">>; "payment_intent_id"?: InputValue<string>; "order_id"?: InputValue<string>; "customer_id"?: InputValue<string>; /** Format: date-time. */ "created_after"?: InputValue<string | globalThis.Date>; /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
