import type { InputValue } from '../runtime.js';
import type { UpdateInventoryLevelRequestInput } from './UpdateInventoryLevelRequestInput.js';

export type InventoryLevelsUpdateInput = { "Idempotency-Key"?: InputValue<string>; "inventory_level_id": InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateInventoryLevelRequestInput>; };
