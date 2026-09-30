import type { InputValue } from '../runtime.js';
import type { CancelReturnRequestInput } from './CancelReturnRequestInput.js';

export type MeCancelReturnInput = { "return_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CancelReturnRequestInput>; };
