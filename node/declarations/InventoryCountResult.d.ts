
import type { InventoryCount } from './InventoryCount.js';
import type { InventoryLevel } from './InventoryLevel.js';

export type InventoryCountResult = { "idempotency_key": string; "inventory_count": InventoryCount; "inventory_movement_ids": Array<string>; "resulting_inventory_levels": Array<InventoryLevel>; };
