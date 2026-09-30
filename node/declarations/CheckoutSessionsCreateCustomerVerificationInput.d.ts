import type { InputValue } from '../runtime.js';
import type { CreateCheckoutCustomerVerificationRequestInput } from './CreateCheckoutCustomerVerificationRequestInput.js';

export type CheckoutSessionsCreateCustomerVerificationInput = { "checkout_session_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Checkout-Session-ID": InputValue<string>; "X-Checkout-Session-Secret": InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; /** Why the buyer is confirming, the email to confirm, and how the code reaches them. */ "body": InputValue<CreateCheckoutCustomerVerificationRequestInput>; };
