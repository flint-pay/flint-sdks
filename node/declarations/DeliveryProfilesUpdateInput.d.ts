import type { InputValue } from '../runtime.js';
import type { UpdateDeliveryProfileRequestInput } from './UpdateDeliveryProfileRequestInput.js';

export type DeliveryProfilesUpdateInput = { "delivery_profile_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateDeliveryProfileRequestInput>; };
