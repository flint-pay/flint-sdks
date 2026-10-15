import type { InputValue } from '../runtime.js';
import type { ApplyDiscountRequestInput } from './ApplyDiscountRequestInput.js';

export type OrdersApplyDiscountInput = { "order_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<ApplyDiscountRequestInput>; };
