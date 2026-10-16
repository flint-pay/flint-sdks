import type { InputValue } from '../runtime.js';
import type { CreateOrderRequestInput } from './CreateOrderRequestInput.js';

export type OrdersCreateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<CreateOrderRequestInput>; };
