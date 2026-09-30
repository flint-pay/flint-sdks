import type { InputValue } from '../runtime.js';
import type { CreateCustomerRequestInput } from './CreateCustomerRequestInput.js';

export type CustomersCreateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateCustomerRequestInput>; };
