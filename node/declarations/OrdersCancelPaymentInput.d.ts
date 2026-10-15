import type { InputValue } from '../runtime.js';
import type { CancelOrderPaymentRequestInput } from './CancelOrderPaymentRequestInput.js';

export type OrdersCancelPaymentInput = { "order_id": InputValue<string>; "payment_intent_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body"?: InputValue<CancelOrderPaymentRequestInput>; };
