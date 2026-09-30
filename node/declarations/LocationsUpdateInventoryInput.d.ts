import type { InputValue } from '../runtime.js';
import type { UpdateLocationInventoryRequestInput } from './UpdateLocationInventoryRequestInput.js';

export type LocationsUpdateInventoryInput = { "Idempotency-Key"?: InputValue<string>; "location_id": InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateLocationInventoryRequestInput>; };
