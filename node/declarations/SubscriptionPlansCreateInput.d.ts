import type { InputValue } from '../runtime.js';
import type { CreateSubscriptionPlanRequestInput } from './CreateSubscriptionPlanRequestInput.js';

export type SubscriptionPlansCreateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateSubscriptionPlanRequestInput>; };
