import type { InputValue } from '../runtime.js';


export type MeListPaymentMethodsInput = { /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "type"?: InputValue<"card">; "status"?: InputValue<"active" | "pending" | "expired" | "removed" | "failed">; "usage"?: InputValue<"on_session" | "off_session">; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
