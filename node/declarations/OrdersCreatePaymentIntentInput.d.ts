import type { InputValue } from '../runtime.js';
import type { CreateOrderPaymentIntentRequestInput } from './CreateOrderPaymentIntentRequestInput.js';

export type OrdersCreatePaymentIntentInput = { "order_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<CreateOrderPaymentIntentRequestInput>; };
