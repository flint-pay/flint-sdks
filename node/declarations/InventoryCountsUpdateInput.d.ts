import type { InputValue } from '../runtime.js';
import type { UpdateInventoryCountRequestInput } from './UpdateInventoryCountRequestInput.js';

export type InventoryCountsUpdateInput = { "Idempotency-Key"?: InputValue<string>; "inventory_count_id": InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateInventoryCountRequestInput>; };
