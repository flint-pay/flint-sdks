import type { InputValue } from '../runtime.js';
import type { UpdateOrderRequestInput } from './UpdateOrderRequestInput.js';

export type OrdersUpdateInput = { "order_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateOrderRequestInput>; };
