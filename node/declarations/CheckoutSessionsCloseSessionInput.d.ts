import type { InputValue } from '../runtime.js';
import type { CloseCheckoutSessionRequestInput } from './CloseCheckoutSessionRequestInput.js';

export type CheckoutSessionsCloseSessionInput = { "checkout_session_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CloseCheckoutSessionRequestInput>; };
