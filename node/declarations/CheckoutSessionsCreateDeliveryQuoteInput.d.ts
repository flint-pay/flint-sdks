import type { InputValue } from '../runtime.js';
import type { CreateCheckoutDeliveryQuoteRequestInput } from './CreateCheckoutDeliveryQuoteRequestInput.js';

export type CheckoutSessionsCreateDeliveryQuoteInput = { "checkout_session_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "body": InputValue<CreateCheckoutDeliveryQuoteRequestInput>; };
