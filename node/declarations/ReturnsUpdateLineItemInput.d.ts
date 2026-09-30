import type { InputValue } from '../runtime.js';
import type { UpdateReturnLineItemRequestInput } from './UpdateReturnLineItemRequestInput.js';

export type ReturnsUpdateLineItemInput = { "return_id": InputValue<string>; "return_line_item_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateReturnLineItemRequestInput>; };
