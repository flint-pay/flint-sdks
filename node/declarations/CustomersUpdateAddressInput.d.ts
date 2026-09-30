import type { InputValue } from '../runtime.js';
import type { UpdateCustomerAddressRequestInput } from './UpdateCustomerAddressRequestInput.js';

export type CustomersUpdateAddressInput = { "customer_id": InputValue<string>; "customer_address_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateCustomerAddressRequestInput>; };
