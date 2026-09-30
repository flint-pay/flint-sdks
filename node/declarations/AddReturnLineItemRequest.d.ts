
import type { ReturnLineItemRequest } from './ReturnLineItemRequest.js';

export type AddReturnLineItemRequest = { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; "line_item": ReturnLineItemRequest; };
