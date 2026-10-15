import type { InputValue } from '../runtime.js';
import type { CreateLocationRequestInput } from './CreateLocationRequestInput.js';

export type LocationsCreateInput = { "Idempotency-Key"?: InputValue<string>; "body": InputValue<CreateLocationRequestInput>; };
