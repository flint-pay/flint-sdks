
import type { InventoryCountObservationRequestInput } from './InventoryCountObservationRequestInput.js';
import type { InventorySourceSystemRequestInput } from './InventorySourceSystemRequestInput.js';

export type UpdateInventoryCountRequestInput = ({ /** Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "expected_version"?: string; "external_actor_id"?: string; /** minItems: 1. maxItems: 100. */ "observations": Array<InventoryCountObservationRequestInput>; /** RFC3339 timestamp. Format: date-time. */ "occurred_at"?: string | globalThis.Date; "source_system"?: InventorySourceSystemRequestInput; }) & (((({ "observations"?: never })) | ({ "expected_version": unknown; })));
