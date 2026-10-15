import type { InputValue } from '../runtime.js';
import type { CreateReturnDispositionRequestInput } from './CreateReturnDispositionRequestInput.js';

export type ReturnsCreateDispositionInput = { "return_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "body": InputValue<CreateReturnDispositionRequestInput>; };
