
import type { AdjustmentLineInput } from './AdjustmentLineInput.js';

/** A recorded physical stock change, such as receiving, damage, or a manual correction. */ export type InventoryAdjustmentInput = { /** RFC3339 timestamp. Format: date-time. */ "created_at": string | globalThis.Date; "external_actor_id"?: string; "idempotency_key": string; "inventory_adjustment_id": string; "lines": Array<AdjustmentLineInput>; "note"?: string; /** RFC3339 timestamp. Format: date-time. */ "occurred_at": string | globalThis.Date; "reason": "received_stock" | "damage" | "condition_changed" | "theft" | "loss" | "manual_correction" | "other"; "source_system": (({ "external_source_id"?: string; "type": "manual" | "pos" | "wms" | "erp" | "flint" | "other"; }) | (null)); };
