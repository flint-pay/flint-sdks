import type { InputValue } from '../runtime.js';
import type { CancelReturnDispositionRequestInput } from './CancelReturnDispositionRequestInput.js';

export type ReturnDispositionsCancelInput = { "return_disposition_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CancelReturnDispositionRequestInput>; };
