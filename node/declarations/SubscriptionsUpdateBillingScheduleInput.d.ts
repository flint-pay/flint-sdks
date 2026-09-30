import type { InputValue } from '../runtime.js';
import type { UpdateSubscriptionBillingScheduleRequestInput } from './UpdateSubscriptionBillingScheduleRequestInput.js';

export type SubscriptionsUpdateBillingScheduleInput = { "subscription_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; /** A closed owner-specific billing schedule update. */ "body": InputValue<UpdateSubscriptionBillingScheduleRequestInput>; };
