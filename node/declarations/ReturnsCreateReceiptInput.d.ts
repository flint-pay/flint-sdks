import type { InputValue } from '../runtime.js';
import type { CreateReturnReceiptRequestInput } from './CreateReturnReceiptRequestInput.js';

export type ReturnsCreateReceiptInput = { "return_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "body": InputValue<CreateReturnReceiptRequestInput>; };
