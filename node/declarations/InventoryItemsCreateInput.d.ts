import type { InputValue } from '../runtime.js';
import type { CreateInventoryItemRequestInput } from './CreateInventoryItemRequestInput.js';

export type InventoryItemsCreateInput = { "Idempotency-Key"?: InputValue<string>; "body": InputValue<CreateInventoryItemRequestInput>; };
