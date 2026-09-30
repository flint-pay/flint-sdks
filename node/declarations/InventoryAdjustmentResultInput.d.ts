
import type { InventoryAdjustmentInput } from './InventoryAdjustmentInput.js';
import type { InventoryLevelInput } from './InventoryLevelInput.js';

export type InventoryAdjustmentResultInput = { "idempotency_key": string; "inventory_adjustment": InventoryAdjustmentInput; "inventory_movement_ids": Array<string>; /** Post-commit state of every level this command touched, so no follow-up read is needed. A replay returns the levels the original command produced. */ "resulting_inventory_levels": Array<InventoryLevelInput>; };
