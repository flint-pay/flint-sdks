import type { InputValue } from '../runtime.js';
import type { RetryReturnDispositionRequestInput } from './RetryReturnDispositionRequestInput.js';

export type ReturnDispositionsRetryInput = { "return_disposition_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<RetryReturnDispositionRequestInput>; };
