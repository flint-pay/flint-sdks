import type { InputValue } from '../runtime.js';
import type { UpdateLocationRequestInput } from './UpdateLocationRequestInput.js';

export type LocationsUpdateInput = { "Idempotency-Key"?: InputValue<string>; "location_id": InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateLocationRequestInput>; };
