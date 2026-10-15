import type { InputValue } from '../runtime.js';
import type { UpdateLocationInventoryRequestInput } from './UpdateLocationInventoryRequestInput.js';

export type LocationsUpdateInventoryInput = { "Idempotency-Key"?: InputValue<string>; "location_id": InputValue<string>; "body": InputValue<UpdateLocationInventoryRequestInput>; };
