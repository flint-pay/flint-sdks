import type { InputValue } from '../runtime.js';


export type OrdersGetInput = { "order_id": InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "expand"?: InputValue<Array<"customer" | "fulfillments.packages" | "fulfillments.shipments" | "payment_intents" | "subscription" | "subscription_plan">>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
