import type { InputValue } from '../runtime.js';
import type { RemoveOrderGiftCardRequestInput } from './RemoveOrderGiftCardRequestInput.js';

export type OrdersRemoveGiftCardInput = { "order_id": InputValue<string>; "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "gift_card_id": InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<RemoveOrderGiftCardRequestInput>; };
