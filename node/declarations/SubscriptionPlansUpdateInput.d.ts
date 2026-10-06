import type { InputValue } from '../runtime.js';
import type { UpdateSubscriptionPlanRequestInput } from './UpdateSubscriptionPlanRequestInput.js';

export type SubscriptionPlansUpdateInput = { "subscription_plan_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateSubscriptionPlanRequestInput>; };
