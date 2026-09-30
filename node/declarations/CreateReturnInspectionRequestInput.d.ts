
import type { ReturnInspectionLineItemRequestInput } from './ReturnInspectionLineItemRequestInput.js';
import type { ReturnSourceSystemInput } from './ReturnSourceSystemInput.js';

export type CreateReturnInspectionRequestInput = { "correction_reason"?: "entry_error" | "duplicate_observation" | "source_correction" | "reconciliation_correction" | "other"; "correction_reason_message"?: string; "external_actor_id"?: string; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; /** RFC3339 timestamp. Format: date-time. */ "inspected_at": string | globalThis.Date; /** minItems: 1. */ "line_items": Array<ReturnInspectionLineItemRequestInput>; "location_id": string; "return_receipt_id": string; "source_system"?: ReturnSourceSystemInput; "supersedes_return_inspection_id"?: string; };
