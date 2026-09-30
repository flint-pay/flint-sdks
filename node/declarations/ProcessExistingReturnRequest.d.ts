
import type { ProcessExistingReturnLineItemRequest } from './ProcessExistingReturnLineItemRequest.js';
import type { ReturnProcessReceiptRequest } from './ReturnProcessReceiptRequest.js';

export type ProcessExistingReturnRequest = { "completion_behavior"?: "complete_when_ready" | "leave_open" | (string & {}); /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; /** minItems: 1. */ "line_items": Array<ProcessExistingReturnLineItemRequest>; "receipt"?: ReturnProcessReceiptRequest; };
