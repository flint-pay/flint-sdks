import type { InputValue } from '../runtime.js';
import type { UpdateCheckoutSessionRequestInput } from './UpdateCheckoutSessionRequestInput.js';

export type CheckoutSessionsUpdateInput = { "checkout_session_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<UpdateCheckoutSessionRequestInput>; };
