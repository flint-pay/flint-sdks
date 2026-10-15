import type { InputValue } from '../runtime.js';
import type { ChangeMeSubscriptionQuantityRequestInput } from './ChangeMeSubscriptionQuantityRequestInput.js';

export type MeChangeSubscriptionQuantityInput = { "subscription_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "body": InputValue<ChangeMeSubscriptionQuantityRequestInput>; };
