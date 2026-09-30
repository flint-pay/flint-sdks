import type { InputValue } from '../runtime.js';
import type { CreateDeliverySelectionRequestInput } from './CreateDeliverySelectionRequestInput.js';

export type CheckoutSessionsCreateDeliverySelectionInput = { "checkout_session_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateDeliverySelectionRequestInput>; };
