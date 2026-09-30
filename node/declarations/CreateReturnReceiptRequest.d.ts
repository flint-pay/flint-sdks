
import type { ReturnReceiptLineItemRequest } from './ReturnReceiptLineItemRequest.js';
import type { ReturnSourceSystem } from './ReturnSourceSystem.js';

export type CreateReturnReceiptRequest = { "correction_reason"?: "entry_error" | "duplicate_observation" | "source_correction" | "reconciliation_correction" | "other" | (string & {}); "correction_reason_message"?: string; "external_actor_id"?: string; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; /** minItems: 1. */ "line_items": Array<ReturnReceiptLineItemRequest>; /** RFC3339 timestamp. Format: date-time. */ "received_at": string; "receiving_location_id": string; "shipment_id"?: string; "source_system"?: ReturnSourceSystem; "supersedes_return_receipt_id"?: string; };
