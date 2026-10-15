import type { InputValue } from '../runtime.js';
import type { SkipSubscriptionCycleRequestInput } from './SkipSubscriptionCycleRequestInput.js';

export type SubscriptionsSkipCycleInput = { "subscription_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<SkipSubscriptionCycleRequestInput>; };
