import type { InputValue } from '../runtime.js';
import type { InventoryCountTransitionRequestInput } from './InventoryCountTransitionRequestInput.js';

export type InventoryCountsApplyInput = { "Idempotency-Key"?: InputValue<string>; "inventory_count_id": InputValue<string>; "body": InputValue<InventoryCountTransitionRequestInput>; };
