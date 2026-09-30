
import type { ProcessExistingReturnLineItemRequestInput } from './ProcessExistingReturnLineItemRequestInput.js';
import type { ReturnProcessReceiptRequestInput } from './ReturnProcessReceiptRequestInput.js';

export type ProcessExistingReturnRequestInput = { "completion_behavior"?: "complete_when_ready" | "leave_open"; /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; /** minItems: 1. */ "line_items": Array<ProcessExistingReturnLineItemRequestInput>; "receipt"?: ReturnProcessReceiptRequestInput; };
