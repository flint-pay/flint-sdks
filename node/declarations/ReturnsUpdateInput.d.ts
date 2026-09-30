import type { InputValue } from '../runtime.js';
import type { UpdateReturnRequestInput } from './UpdateReturnRequestInput.js';

export type ReturnsUpdateInput = { "return_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateReturnRequestInput>; };
