
import type { InventoryAdjustmentLineRequestInput } from './InventoryAdjustmentLineRequestInput.js';
import type { InventorySourceSystemRequestInput } from './InventorySourceSystemRequestInput.js';

export type CreateInventoryAdjustmentRequestInput = { "external_actor_id"?: string; "lines": Array<InventoryAdjustmentLineRequestInput>; "note"?: string; /** RFC3339 timestamp. Format: date-time. */ "occurred_at"?: string | globalThis.Date; "reason": "received_stock" | "damage" | "condition_changed" | "theft" | "loss" | "manual_correction" | "other"; "source_system"?: InventorySourceSystemRequestInput; };
