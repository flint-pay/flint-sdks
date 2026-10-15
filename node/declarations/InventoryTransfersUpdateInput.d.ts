import type { InputValue } from '../runtime.js';
import type { UpdateInventoryTransferRequestInput } from './UpdateInventoryTransferRequestInput.js';

export type InventoryTransfersUpdateInput = { "Idempotency-Key"?: InputValue<string>; "inventory_transfer_id": InputValue<string>; "body": InputValue<UpdateInventoryTransferRequestInput>; };
