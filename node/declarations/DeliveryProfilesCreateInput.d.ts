import type { InputValue } from '../runtime.js';
import type { CreateDeliveryProfileRequestInput } from './CreateDeliveryProfileRequestInput.js';

export type DeliveryProfilesCreateInput = { "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateDeliveryProfileRequestInput>; };
