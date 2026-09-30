import type { InputValue } from '../runtime.js';
import type { UpdateSubscriptionRequestInput } from './UpdateSubscriptionRequestInput.js';

export type SubscriptionsUpdateInput = { "subscription_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateSubscriptionRequestInput>; };
