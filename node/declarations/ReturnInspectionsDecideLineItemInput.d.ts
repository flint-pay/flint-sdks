import type { InputValue } from '../runtime.js';
import type { DecideReturnInspectionLineItemRequestInput } from './DecideReturnInspectionLineItemRequestInput.js';

export type ReturnInspectionsDecideLineItemInput = { "return_inspection_id": InputValue<string>; "return_inspection_line_item_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<DecideReturnInspectionLineItemRequestInput>; };
