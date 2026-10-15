import type { InputValue } from '../runtime.js';
import type { PayOrderRequestInput } from './PayOrderRequestInput.js';

export type OrdersPayInput = { "order_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** pattern: ^[a-f0-9]{32}$. */ "Flint-Buyer-Device"?: InputValue<string>; "body": InputValue<PayOrderRequestInput>; };
