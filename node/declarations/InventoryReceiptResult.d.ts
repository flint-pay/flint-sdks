
import type { InventoryLevel } from './InventoryLevel.js';
import type { InventoryReceipt } from './InventoryReceipt.js';

export type InventoryReceiptResult = { "idempotency_key": string; "inventory_movement_ids": Array<string>; "inventory_receipt": InventoryReceipt; "resulting_inventory_levels": Array<InventoryLevel>; };
