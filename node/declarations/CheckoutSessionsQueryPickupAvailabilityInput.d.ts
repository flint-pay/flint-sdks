import type { InputValue } from '../runtime.js';
import type { QueryDeliveryPickupAvailabilityRequestInput } from './QueryDeliveryPickupAvailabilityRequestInput.js';

export type CheckoutSessionsQueryPickupAvailabilityInput = { "checkout_session_id": InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<QueryDeliveryPickupAvailabilityRequestInput>; };
