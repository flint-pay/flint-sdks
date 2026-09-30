import type { InputValue } from '../runtime.js';
import type { PayOrderRequestInput } from './PayOrderRequestInput.js';

export type OrdersPayInput = { "order_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<PayOrderRequestInput>; };
