
import type { ReturnProcessDecision } from './ReturnProcessDecision.js';
import type { ReturnProcessDispositionRequest } from './ReturnProcessDispositionRequest.js';
import type { ReturnProcessInspectionRequest } from './ReturnProcessInspectionRequest.js';
import type { ReturnProcessResolutionRequest } from './ReturnProcessResolutionRequest.js';

export type ProcessExistingReturnLineItemRequest = { "decision"?: ReturnProcessDecision; "disposition"?: ReturnProcessDispositionRequest; "inspection"?: ReturnProcessInspectionRequest; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "received_quantity"?: string; "resolution"?: ReturnProcessResolutionRequest; "return_line_item_id": string; };
