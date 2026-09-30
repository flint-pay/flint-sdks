
import type { InventoryLevelInput } from './InventoryLevelInput.js';
import type { InventoryTransferInput } from './InventoryTransferInput.js';

export type InventoryTransferResultInput = { "idempotency_key": string; "inventory_movement_ids": Array<string>; "inventory_transfer": InventoryTransferInput; "resulting_inventory_levels": Array<InventoryLevelInput>; };
