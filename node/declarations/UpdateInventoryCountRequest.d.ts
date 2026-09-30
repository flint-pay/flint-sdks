
import type { InventoryCountObservationRequest } from './InventoryCountObservationRequest.js';
import type { InventorySourceSystemRequest } from './InventorySourceSystemRequest.js';

export type UpdateInventoryCountRequest = ({ /** Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "expected_version"?: string; "external_actor_id"?: string; /** minItems: 1. maxItems: 100. */ "observations": Array<InventoryCountObservationRequest>; /** RFC3339 timestamp. Format: date-time. */ "occurred_at"?: string; "source_system"?: InventorySourceSystemRequest; }) & (((unknown) | ({ "expected_version": unknown; }) | (object)));
