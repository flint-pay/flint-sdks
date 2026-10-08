import type { InputValue } from '../runtime.js';
import type { ChangeMeSubscriptionQuantityRequestInput } from './ChangeMeSubscriptionQuantityRequestInput.js';

export type MeChangeSubscriptionQuantityInput = { "subscription_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<ChangeMeSubscriptionQuantityRequestInput>; };
