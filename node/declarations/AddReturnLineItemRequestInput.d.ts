
import type { ReturnLineItemRequestInput } from './ReturnLineItemRequestInput.js';

export type AddReturnLineItemRequestInput = { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; "line_item": ReturnLineItemRequestInput; };
