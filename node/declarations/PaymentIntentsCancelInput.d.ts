import type { InputValue } from '../runtime.js';
import type { CancelOrderPaymentAttemptRequestInput } from './CancelOrderPaymentAttemptRequestInput.js';

export type PaymentIntentsCancelInput = { "payment_intent_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<CancelOrderPaymentAttemptRequestInput>; };
