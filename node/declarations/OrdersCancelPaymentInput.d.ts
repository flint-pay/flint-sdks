import type { InputValue } from '../runtime.js';
import type { CancelOrderPaymentRequestInput } from './CancelOrderPaymentRequestInput.js';

export type OrdersCancelPaymentInput = { "order_id": InputValue<string>; "payment_intent_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body"?: InputValue<CancelOrderPaymentRequestInput>; };
