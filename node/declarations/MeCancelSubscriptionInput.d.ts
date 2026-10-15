import type { InputValue } from '../runtime.js';
import type { CancelSubscriptionRequestInput } from './CancelSubscriptionRequestInput.js';

export type MeCancelSubscriptionInput = { "subscription_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<CancelSubscriptionRequestInput>; };
