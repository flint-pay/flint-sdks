import type { InputValue } from '../runtime.js';


export type OrdersGetPaymentAttemptInput = { "order_id": InputValue<string>; "payment_attempt_id": InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
