import type { InputValue } from '../runtime.js';
import type { CreateReturnDispositionRequestInput } from './CreateReturnDispositionRequestInput.js';

export type ReturnsCreateDispositionInput = { "return_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateReturnDispositionRequestInput>; };
