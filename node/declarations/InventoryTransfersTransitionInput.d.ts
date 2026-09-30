import type { InputValue } from '../runtime.js';
import type { InventoryTransferTransitionRequestInput } from './InventoryTransferTransitionRequestInput.js';

export type InventoryTransfersTransitionInput = { "Idempotency-Key"?: InputValue<string>; "inventory_transfer_id": InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<InventoryTransferTransitionRequestInput>; };
