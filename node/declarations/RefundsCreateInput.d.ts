import type { InputValue } from '../runtime.js';
import type { CreateRefundRequestInput } from './CreateRefundRequestInput.js';

export type RefundsCreateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<CreateRefundRequestInput>; };
