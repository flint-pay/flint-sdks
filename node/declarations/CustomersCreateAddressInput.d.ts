import type { InputValue } from '../runtime.js';
import type { CreateCustomerAddressRequestInput } from './CreateCustomerAddressRequestInput.js';

export type CustomersCreateAddressInput = { "customer_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateCustomerAddressRequestInput>; };
