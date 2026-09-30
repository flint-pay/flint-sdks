import type { InputValue } from '../runtime.js';
import type { CreateOrderRequestInput } from './CreateOrderRequestInput.js';

export type OrdersCreateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateOrderRequestInput>; };
