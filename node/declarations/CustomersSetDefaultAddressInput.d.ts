import type { InputValue } from '../runtime.js';
import type { SetDefaultCustomerAddressRequestInput } from './SetDefaultCustomerAddressRequestInput.js';

export type CustomersSetDefaultAddressInput = { "customer_id": InputValue<string>; "customer_address_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<SetDefaultCustomerAddressRequestInput>; };
