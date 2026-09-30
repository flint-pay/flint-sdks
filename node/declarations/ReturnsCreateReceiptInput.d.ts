import type { InputValue } from '../runtime.js';
import type { CreateReturnReceiptRequestInput } from './CreateReturnReceiptRequestInput.js';

export type ReturnsCreateReceiptInput = { "return_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateReturnReceiptRequestInput>; };
