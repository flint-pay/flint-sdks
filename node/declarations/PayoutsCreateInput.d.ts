import type { InputValue } from '../runtime.js';
import type { CreatePayoutRequestInput } from './CreatePayoutRequestInput.js';

export type PayoutsCreateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreatePayoutRequestInput>; };
