import type { InputValue } from '../runtime.js';


export type SubscriptionsGetInput = { "subscription_id": InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "expand"?: InputValue<Array<"customer" | "payment_method" | "subscription_plan">>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
