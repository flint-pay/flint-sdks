
import type { CountProvenanceInput } from './CountProvenanceInput.js';
import type { InventoryCountLineInput } from './InventoryCountLineInput.js';

export type InventoryCountInput = { /** RFC3339 timestamp. Format: date-time. */ "applied_at"?: string | globalThis.Date; /** RFC3339 timestamp. Format: date-time. */ "created_at": string | globalThis.Date; "idempotency_key": string; "inventory_count_id": string; "lines": Array<InventoryCountLineInput>; "location_id": string; "observation_provenance"?: CountProvenanceInput; "status": "draft" | "applied" | "canceled"; /** RFC3339 timestamp. Format: date-time. */ "updated_at": string | globalThis.Date; /** Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 0. */ "version": string; };
