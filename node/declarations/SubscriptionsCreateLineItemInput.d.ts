import type { InputValue } from '../runtime.js';
import type { CreateSubscriptionLineItemRequestInput } from './CreateSubscriptionLineItemRequestInput.js';

export type SubscriptionsCreateLineItemInput = { "subscription_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateSubscriptionLineItemRequestInput>; };
