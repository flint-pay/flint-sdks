import type { InputValue } from '../runtime.js';
import type { CapturePaymentIntentRequestInput } from './CapturePaymentIntentRequestInput.js';

export type PaymentIntentsCaptureInput = { "payment_intent_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CapturePaymentIntentRequestInput>; };
