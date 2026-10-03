import type { InputValue } from '../runtime.js';
import type { ApplyOrderGiftCardRequestInput } from './ApplyOrderGiftCardRequestInput.js';

export type OrdersApplyGiftCardInput = { "order_id": InputValue<string>; "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Gift-Card-Challenge"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<ApplyOrderGiftCardRequestInput>; };
