import type { InputValue } from '../runtime.js';
import type { ConfirmPaymentIntentRequestInput } from './ConfirmPaymentIntentRequestInput.js';

export type PaymentIntentsConfirmInput = { "payment_intent_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<ConfirmPaymentIntentRequestInput>; };
