import type { InputValue } from '../runtime.js';
import type { UpdateSubscriptionOfferRequestInput } from './UpdateSubscriptionOfferRequestInput.js';

export type SubscriptionOffersUpdateInput = { "subscription_offer_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateSubscriptionOfferRequestInput>; };
