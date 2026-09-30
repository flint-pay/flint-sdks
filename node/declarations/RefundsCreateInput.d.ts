import type { InputValue } from '../runtime.js';
import type { CreateRefundRequestInput } from './CreateRefundRequestInput.js';

export type RefundsCreateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateRefundRequestInput>; };
