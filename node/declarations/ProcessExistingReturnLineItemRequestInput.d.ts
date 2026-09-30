
import type { ReturnProcessDecisionInput } from './ReturnProcessDecisionInput.js';
import type { ReturnProcessDispositionRequestInput } from './ReturnProcessDispositionRequestInput.js';
import type { ReturnProcessInspectionRequestInput } from './ReturnProcessInspectionRequestInput.js';
import type { ReturnProcessResolutionRequestInput } from './ReturnProcessResolutionRequestInput.js';

export type ProcessExistingReturnLineItemRequestInput = { "decision"?: ReturnProcessDecisionInput; "disposition"?: ReturnProcessDispositionRequestInput; "inspection"?: ReturnProcessInspectionRequestInput; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "received_quantity"?: string; "resolution"?: ReturnProcessResolutionRequestInput; "return_line_item_id": string; };
