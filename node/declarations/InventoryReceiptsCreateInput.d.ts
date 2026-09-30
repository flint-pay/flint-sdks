import type { InputValue } from '../runtime.js';
import type { CreateInventoryReceiptRequestInput } from './CreateInventoryReceiptRequestInput.js';

export type InventoryReceiptsCreateInput = { "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateInventoryReceiptRequestInput>; };
