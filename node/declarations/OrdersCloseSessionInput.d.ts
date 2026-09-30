import type { InputValue } from '../runtime.js';
import type { CloseOrderRequestInput } from './CloseOrderRequestInput.js';

export type OrdersCloseSessionInput = { "order_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CloseOrderRequestInput>; };
