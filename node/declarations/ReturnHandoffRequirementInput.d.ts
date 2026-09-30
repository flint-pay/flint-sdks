
import type { ReturnHandoffDestinationInput } from './ReturnHandoffDestinationInput.js';
import type { ReturnShipmentLineItemAllocationInput } from './ReturnShipmentLineItemAllocationInput.js';

export type ReturnHandoffRequirementInput = { "destination": ReturnHandoffDestinationInput; /** RFC3339 timestamp. Format: date-time. */ "expires_at"?: string | globalThis.Date; "instructions"?: string; "line_items": Array<ReturnShipmentLineItemAllocationInput>; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "shipment_count"?: string; /** Whether the buyer has started sending merchandise back. A requirement leaves handoff_requirements entirely once it is satisfied, so there is no terminal status and an empty array means nothing is waiting on the buyer. */ "status": "pending" | "in_progress"; };
