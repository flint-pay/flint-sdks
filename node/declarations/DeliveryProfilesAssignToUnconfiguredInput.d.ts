import type { InputValue } from '../runtime.js';
import type { AssignToUnconfiguredDeliveryProfileRequestInput } from './AssignToUnconfiguredDeliveryProfileRequestInput.js';

export type DeliveryProfilesAssignToUnconfiguredInput = { "delivery_profile_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<AssignToUnconfiguredDeliveryProfileRequestInput>; };
