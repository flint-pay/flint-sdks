import type { InputValue } from '../runtime.js';


export type CheckoutSessionsGetInput = { "checkout_session_id": InputValue<string>; "expand"?: InputValue<Array<"customer" | "invoice" | "order" | "payment_intents" | "payment_link">>; };
