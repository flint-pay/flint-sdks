import type { InputValue } from '../runtime.js';


export type OrdersDeleteLineItemInput = { "order_id": InputValue<string>; "order_line_item_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
