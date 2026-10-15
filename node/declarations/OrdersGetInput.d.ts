import type { InputValue } from '../runtime.js';


export type OrdersGetInput = { "order_id": InputValue<string>; "expand"?: InputValue<Array<"customer" | "fulfillments.packages" | "fulfillments.shipments" | "payment_intents" | "subscription" | "subscription_plan">>; };
