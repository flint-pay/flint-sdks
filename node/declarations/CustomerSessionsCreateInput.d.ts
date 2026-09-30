import type { InputValue } from '../runtime.js';
import type { CreateCustomerSessionRequestInput } from './CreateCustomerSessionRequestInput.js';

export type CustomerSessionsCreateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateCustomerSessionRequestInput>; };
