import type { InputValue } from '../runtime.js';
import type { CreateSubscriptionRequestInput } from './CreateSubscriptionRequestInput.js';

export type SubscriptionsCreateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<CreateSubscriptionRequestInput>; };
