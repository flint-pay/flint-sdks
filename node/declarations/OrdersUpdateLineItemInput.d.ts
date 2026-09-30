import type { InputValue } from '../runtime.js';
import type { UpdateLineItemRequestInput } from './UpdateLineItemRequestInput.js';

export type OrdersUpdateLineItemInput = { "order_id": InputValue<string>; "order_line_item_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateLineItemRequestInput>; };
