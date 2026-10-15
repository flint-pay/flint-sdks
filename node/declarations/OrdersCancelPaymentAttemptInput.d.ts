import type { InputValue } from '../runtime.js';
import type { CancelOrderPaymentAttemptRequestInput } from './CancelOrderPaymentAttemptRequestInput.js';

export type OrdersCancelPaymentAttemptInput = { "order_id": InputValue<string>; "order_payment_attempt_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body"?: InputValue<CancelOrderPaymentAttemptRequestInput>; };
