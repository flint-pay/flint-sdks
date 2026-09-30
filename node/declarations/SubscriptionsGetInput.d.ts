import type { InputValue } from '../runtime.js';


export type SubscriptionsGetInput = { "subscription_id": InputValue<string>; "expand"?: InputValue<Array<"customer" | "payment_method" | "subscription_plan">>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
