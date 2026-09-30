import type { InputValue } from '../runtime.js';
import type { ReopenReturnRequestInput } from './ReopenReturnRequestInput.js';

export type ReturnsReopenInput = { "return_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<ReopenReturnRequestInput>; };
