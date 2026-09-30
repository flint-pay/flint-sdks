import type { InputValue } from '../runtime.js';
import type { AddReturnLineItemRequestInput } from './AddReturnLineItemRequestInput.js';

export type ReturnsAddLineItemInput = { "return_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<AddReturnLineItemRequestInput>; };
