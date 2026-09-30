import type { InputValue } from '../runtime.js';


export type InventoryItemsRemoveInput = { "inventory_item_id": InputValue<string>; /** minimum: 1. */ "expected_version"?: InputValue<number>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
