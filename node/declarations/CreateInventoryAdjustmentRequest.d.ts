
import type { InventoryAdjustmentLineRequest } from './InventoryAdjustmentLineRequest.js';
import type { InventorySourceSystemRequest } from './InventorySourceSystemRequest.js';

export type CreateInventoryAdjustmentRequest = { "external_actor_id"?: string; "lines": Array<InventoryAdjustmentLineRequest>; "note"?: string; /** RFC3339 timestamp. Format: date-time. */ "occurred_at"?: string; "reason": "received_stock" | "damage" | "condition_changed" | "theft" | "loss" | "manual_correction" | "other" | (string & {}); "source_system"?: InventorySourceSystemRequest; };
