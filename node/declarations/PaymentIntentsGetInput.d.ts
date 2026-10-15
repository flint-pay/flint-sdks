import type { InputValue } from '../runtime.js';


export type PaymentIntentsGetInput = { "payment_intent_id": InputValue<string>; "expand"?: InputValue<Array<"customer" | "invoice" | "order">>; };
