import type { InputValue } from '../runtime.js';
import type { CreateCustomerVerificationRequestInput } from './CreateCustomerVerificationRequestInput.js';

export type CustomerVerificationsCreateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateCustomerVerificationRequestInput>; };
