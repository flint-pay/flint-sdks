import type { InputValue } from '../runtime.js';
import type { ChangeMeSubscriptionBillingIntervalRequestInput } from './ChangeMeSubscriptionBillingIntervalRequestInput.js';

export type MeChangeSubscriptionBillingIntervalInput = { "subscription_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<ChangeMeSubscriptionBillingIntervalRequestInput>; };
