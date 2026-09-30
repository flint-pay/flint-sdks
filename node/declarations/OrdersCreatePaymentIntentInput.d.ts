import type { InputValue } from '../runtime.js';
import type { CreateOrderPaymentIntentRequestInput } from './CreateOrderPaymentIntentRequestInput.js';

export type OrdersCreatePaymentIntentInput = { "order_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateOrderPaymentIntentRequestInput>; };
