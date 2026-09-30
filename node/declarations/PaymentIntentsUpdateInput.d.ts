import type { InputValue } from '../runtime.js';
import type { UpdatePaymentIntentRequestInput } from './UpdatePaymentIntentRequestInput.js';

export type PaymentIntentsUpdateInput = { "payment_intent_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdatePaymentIntentRequestInput>; };
