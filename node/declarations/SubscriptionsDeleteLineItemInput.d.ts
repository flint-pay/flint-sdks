import type { InputValue } from '../runtime.js';


export type SubscriptionsDeleteLineItemInput = { "subscription_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "subscription_line_item_id": InputValue<string>; /** Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "expected_version"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
