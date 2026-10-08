import type { InputValue } from '../runtime.js';
import type { CreateSubscriptionOfferRequestInput } from './CreateSubscriptionOfferRequestInput.js';

export type SubscriptionOffersCreateInput = { "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateSubscriptionOfferRequestInput>; };
