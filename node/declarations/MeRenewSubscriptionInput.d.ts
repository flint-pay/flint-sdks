import type { InputValue } from '../runtime.js';
import type { InventoryCountTransitionRequestInput } from './InventoryCountTransitionRequestInput.js';

export type MeRenewSubscriptionInput = { "subscription_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<InventoryCountTransitionRequestInput>; };
