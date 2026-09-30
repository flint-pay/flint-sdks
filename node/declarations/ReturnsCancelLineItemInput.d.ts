import type { InputValue } from '../runtime.js';
import type { CancelReturnLineItemRequestInput } from './CancelReturnLineItemRequestInput.js';

export type ReturnsCancelLineItemInput = { "return_id": InputValue<string>; "return_line_item_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CancelReturnLineItemRequestInput>; };
