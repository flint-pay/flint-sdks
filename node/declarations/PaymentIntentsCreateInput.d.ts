import type { InputValue } from '../runtime.js';
import type { CreatePaymentIntentRequestInput } from './CreatePaymentIntentRequestInput.js';

export type PaymentIntentsCreateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<CreatePaymentIntentRequestInput>; };
