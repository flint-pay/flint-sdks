import type { InputValue } from '../runtime.js';
import type { ApplyOrderGiftCardRequestInput } from './ApplyOrderGiftCardRequestInput.js';

export type OrdersApplyGiftCardInput = { "order_id": InputValue<string>; "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Gift-Card-Challenge"?: InputValue<string>; "body": InputValue<ApplyOrderGiftCardRequestInput>; };
