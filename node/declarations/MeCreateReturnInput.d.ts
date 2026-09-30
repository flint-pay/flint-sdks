import type { InputValue } from '../runtime.js';
import type { CreateReturnRequestInput } from './CreateReturnRequestInput.js';

export type MeCreateReturnInput = { "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateReturnRequestInput>; };
