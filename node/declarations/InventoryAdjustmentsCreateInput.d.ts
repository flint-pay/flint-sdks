import type { InputValue } from '../runtime.js';
import type { CreateInventoryAdjustmentRequestInput } from './CreateInventoryAdjustmentRequestInput.js';

export type InventoryAdjustmentsCreateInput = { "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateInventoryAdjustmentRequestInput>; };
