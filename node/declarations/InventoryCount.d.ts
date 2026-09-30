
import type { CountProvenance } from './CountProvenance.js';
import type { InventoryCountLine } from './InventoryCountLine.js';

export type InventoryCount = { /** RFC3339 timestamp. Format: date-time. */ "applied_at"?: string; /** RFC3339 timestamp. Format: date-time. */ "created_at": string; "idempotency_key": string; "inventory_count_id": string; "lines": Array<InventoryCountLine>; "location_id": string; "observation_provenance"?: CountProvenance; "status": "draft" | "applied" | "canceled" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "updated_at": string; /** Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 0. */ "version": string; };
