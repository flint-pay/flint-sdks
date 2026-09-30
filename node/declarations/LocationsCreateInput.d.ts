import type { InputValue } from '../runtime.js';
import type { CreateLocationRequestInput } from './CreateLocationRequestInput.js';

export type LocationsCreateInput = { "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateLocationRequestInput>; };
