
import type { AdjustmentLine } from './AdjustmentLine.js';

/** A recorded physical stock change, such as receiving, damage, or a manual correction. */ export type InventoryAdjustment = { /** RFC3339 timestamp. Format: date-time. */ "created_at": string; "external_actor_id"?: string; "idempotency_key": string; "inventory_adjustment_id": string; "lines": Array<AdjustmentLine>; "note"?: string; /** RFC3339 timestamp. Format: date-time. */ "occurred_at": string; "reason": "received_stock" | "damage" | "condition_changed" | "theft" | "loss" | "manual_correction" | "other" | (string & {}); "source_system": (({ "external_source_id"?: string; "type": "manual" | "pos" | "wms" | "erp" | "flint" | "other" | (string & {}); }) | (null)); };
