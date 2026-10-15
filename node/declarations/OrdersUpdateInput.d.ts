import type { InputValue } from '../runtime.js';
import type { UpdateOrderRequestInput } from './UpdateOrderRequestInput.js';

export type OrdersUpdateInput = { "order_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<UpdateOrderRequestInput>; };
