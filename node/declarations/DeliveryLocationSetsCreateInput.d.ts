import type { InputValue } from '../runtime.js';
import type { CreateDeliveryLocationSetRequestInput } from './CreateDeliveryLocationSetRequestInput.js';

export type DeliveryLocationSetsCreateInput = { "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateDeliveryLocationSetRequestInput>; };
