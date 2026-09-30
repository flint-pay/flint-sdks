import type { InputValue } from '../runtime.js';
import type { CreateInventoryTransferRequestInput } from './CreateInventoryTransferRequestInput.js';

export type InventoryTransfersCreateInput = { "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateInventoryTransferRequestInput>; };
