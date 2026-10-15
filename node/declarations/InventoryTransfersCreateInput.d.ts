import type { InputValue } from '../runtime.js';
import type { CreateInventoryTransferRequestInput } from './CreateInventoryTransferRequestInput.js';

export type InventoryTransfersCreateInput = { "Idempotency-Key"?: InputValue<string>; "body": InputValue<CreateInventoryTransferRequestInput>; };
