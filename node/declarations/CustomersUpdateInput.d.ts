import type { InputValue } from '../runtime.js';
import type { UpdateCustomerRequestInput } from './UpdateCustomerRequestInput.js';

export type CustomersUpdateInput = { "customer_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateCustomerRequestInput>; };
