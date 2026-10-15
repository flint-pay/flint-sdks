import type { InputValue } from '../runtime.js';
import type { RemoveDiscountsRequestInput } from './RemoveDiscountsRequestInput.js';

export type OrdersRemoveDiscountsInput = { "order_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<RemoveDiscountsRequestInput>; };
