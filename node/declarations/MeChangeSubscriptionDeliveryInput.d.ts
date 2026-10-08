import type { InputValue } from '../runtime.js';
import type { ChangeMeSubscriptionDeliveryRequestInput } from './ChangeMeSubscriptionDeliveryRequestInput.js';

export type MeChangeSubscriptionDeliveryInput = { "subscription_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<ChangeMeSubscriptionDeliveryRequestInput>; };
