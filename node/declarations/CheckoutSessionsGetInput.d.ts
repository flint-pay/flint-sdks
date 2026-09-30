import type { InputValue } from '../runtime.js';


export type CheckoutSessionsGetInput = { "checkout_session_id": InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "expand"?: InputValue<Array<"customer" | "invoice" | "order" | "payment_intents" | "payment_link">>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
