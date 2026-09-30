
import type { InventoryLevelInput } from './InventoryLevelInput.js';
import type { InventoryReceiptInput } from './InventoryReceiptInput.js';

export type InventoryReceiptResultInput = { "idempotency_key": string; "inventory_movement_ids": Array<string>; "inventory_receipt": InventoryReceiptInput; "resulting_inventory_levels": Array<InventoryLevelInput>; };
