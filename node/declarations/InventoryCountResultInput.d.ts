
import type { InventoryCountInput } from './InventoryCountInput.js';
import type { InventoryLevelInput } from './InventoryLevelInput.js';

export type InventoryCountResultInput = { "idempotency_key": string; "inventory_count": InventoryCountInput; "inventory_movement_ids": Array<string>; "resulting_inventory_levels": Array<InventoryLevelInput>; };
