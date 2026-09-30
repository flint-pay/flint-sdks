import type { InputValue } from '../runtime.js';


export type CustomersDeleteAddressInput = { "customer_id": InputValue<string>; "customer_address_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
