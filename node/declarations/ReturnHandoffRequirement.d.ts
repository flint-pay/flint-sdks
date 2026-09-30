
import type { ReturnHandoffDestination } from './ReturnHandoffDestination.js';
import type { ReturnShipmentLineItemAllocation } from './ReturnShipmentLineItemAllocation.js';

export type ReturnHandoffRequirement = { "destination": ReturnHandoffDestination; /** RFC3339 timestamp. Format: date-time. */ "expires_at"?: string; "instructions"?: string; "line_items": Array<ReturnShipmentLineItemAllocation>; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "shipment_count"?: string; /** Whether the buyer has started sending merchandise back. A requirement leaves handoff_requirements entirely once it is satisfied, so there is no terminal status and an empty array means nothing is waiting on the buyer. */ "status": "pending" | "in_progress" | (string & {}); };
