import type { InputValue } from '../runtime.js';
import type { VerifyReturnReceiptLineItemRequestInput } from './VerifyReturnReceiptLineItemRequestInput.js';

export type ReturnReceiptsVerifyLineItemInput = { "return_receipt_id": InputValue<string>; "return_receipt_line_item_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<VerifyReturnReceiptLineItemRequestInput>; };
