import type { InputValue } from '../runtime.js';
import type { UpdateDeliveryLocationSetRequestInput } from './UpdateDeliveryLocationSetRequestInput.js';

export type DeliveryLocationSetsUpdateInput = { "delivery_location_set_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateDeliveryLocationSetRequestInput>; };
