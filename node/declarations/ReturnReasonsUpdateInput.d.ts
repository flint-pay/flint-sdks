import type { InputValue } from '../runtime.js';
import type { UpdateReturnReasonRequestInput } from './UpdateReturnReasonRequestInput.js';

export type ReturnReasonsUpdateInput = { "return_reason_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateReturnReasonRequestInput>; };
