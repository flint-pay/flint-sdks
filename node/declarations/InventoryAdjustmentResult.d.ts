
import type { InventoryAdjustment } from './InventoryAdjustment.js';
import type { InventoryLevel } from './InventoryLevel.js';

export type InventoryAdjustmentResult = { "idempotency_key": string; "inventory_adjustment": InventoryAdjustment; "inventory_movement_ids": Array<string>; /** Post-commit state of every level this command touched, so no follow-up read is needed. A replay returns the levels the original command produced. */ "resulting_inventory_levels": Array<InventoryLevel>; };
