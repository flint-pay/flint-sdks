import type { InputValue } from '../runtime.js';
import type { UpdateLineItemRequestInput } from './UpdateLineItemRequestInput.js';

export type OrdersUpdateLineItemInput = { "order_id": InputValue<string>; "order_line_item_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<UpdateLineItemRequestInput>; };
