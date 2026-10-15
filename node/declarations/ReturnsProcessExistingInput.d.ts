import type { InputValue } from '../runtime.js';
import type { ProcessExistingReturnRequestInput } from './ProcessExistingReturnRequestInput.js';

export type ReturnsProcessExistingInput = { "return_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "body": InputValue<ProcessExistingReturnRequestInput>; };
