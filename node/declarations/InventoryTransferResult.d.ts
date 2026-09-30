
import type { InventoryLevel } from './InventoryLevel.js';
import type { InventoryTransfer } from './InventoryTransfer.js';

export type InventoryTransferResult = { "idempotency_key": string; "inventory_movement_ids": Array<string>; "inventory_transfer": InventoryTransfer; "resulting_inventory_levels": Array<InventoryLevel>; };
