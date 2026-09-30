import type { InputValue } from '../runtime.js';
import type { CreateInventoryCountRequestInput } from './CreateInventoryCountRequestInput.js';

export type InventoryCountsCreateInput = { "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateInventoryCountRequestInput>; };
