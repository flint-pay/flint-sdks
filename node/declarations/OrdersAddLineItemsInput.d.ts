import type { InputValue } from '../runtime.js';
import type { AddLineItemsRequestInput } from './AddLineItemsRequestInput.js';

export type OrdersAddLineItemsInput = { "order_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<AddLineItemsRequestInput>; };
