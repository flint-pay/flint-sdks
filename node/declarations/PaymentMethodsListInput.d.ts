import type { InputValue } from '../runtime.js';


export type PaymentMethodsListInput = { "customer_id"?: InputValue<string>; /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "type"?: InputValue<"card">; "status"?: InputValue<"active" | "pending" | "expired" | "removed" | "failed">; "usage"?: InputValue<"on_session" | "off_session">; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
