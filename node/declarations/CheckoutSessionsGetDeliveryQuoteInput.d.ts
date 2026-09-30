import type { InputValue } from '../runtime.js';


export type CheckoutSessionsGetDeliveryQuoteInput = { "checkout_session_id": InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "delivery_quote_id": InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
