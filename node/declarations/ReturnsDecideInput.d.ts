import type { InputValue } from '../runtime.js';
import type { DecideReturnRequestInput } from './DecideReturnRequestInput.js';

export type ReturnsDecideInput = { "return_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<DecideReturnRequestInput>; };
