import type { InputValue } from '../runtime.js';
import type { ConfirmCheckoutCustomerVerificationRequestInput } from './ConfirmCheckoutCustomerVerificationRequestInput.js';

export type CheckoutSessionsConfirmCustomerVerificationInput = { "checkout_session_id": InputValue<string>; "customer_verification_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Checkout-Session-ID": InputValue<string>; "X-Checkout-Session-Secret": InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; /** The code the buyer typed. */ "body": InputValue<ConfirmCheckoutCustomerVerificationRequestInput>; };
