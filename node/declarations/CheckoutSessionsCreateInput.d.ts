import type { InputValue } from '../runtime.js';
import type { CreateCheckoutSessionRequestInput } from './CreateCheckoutSessionRequestInput.js';

export type CheckoutSessionsCreateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateCheckoutSessionRequestInput>; };
