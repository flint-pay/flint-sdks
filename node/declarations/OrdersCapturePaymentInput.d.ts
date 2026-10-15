import type { InputValue } from '../runtime.js';
import type { CaptureOrderPaymentRequestInput } from './CaptureOrderPaymentRequestInput.js';

export type OrdersCapturePaymentInput = { "order_id": InputValue<string>; "payment_intent_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body"?: InputValue<CaptureOrderPaymentRequestInput>; };
