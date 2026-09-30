import type { InputValue } from '../runtime.js';
import type { UpdateInventoryItemRequestInput } from './UpdateInventoryItemRequestInput.js';

export type InventoryItemsUpdateInput = { "Idempotency-Key"?: InputValue<string>; "inventory_item_id": InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateInventoryItemRequestInput>; };
