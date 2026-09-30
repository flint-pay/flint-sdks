import type { InputValue } from '../runtime.js';


export type CheckoutSessionsDeleteCurrentDeliverySelectionInput = { "checkout_session_id": InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "expected_delivery_selection_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
