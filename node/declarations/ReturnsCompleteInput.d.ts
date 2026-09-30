import type { InputValue } from '../runtime.js';
import type { CompleteReturnRequestInput } from './CompleteReturnRequestInput.js';

export type ReturnsCompleteInput = { "return_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CompleteReturnRequestInput>; };
