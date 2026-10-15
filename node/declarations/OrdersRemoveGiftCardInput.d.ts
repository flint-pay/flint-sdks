import type { InputValue } from '../runtime.js';
import type { RemoveOrderGiftCardRequestInput } from './RemoveOrderGiftCardRequestInput.js';

export type OrdersRemoveGiftCardInput = { "order_id": InputValue<string>; "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "gift_card_id": InputValue<string>; "body": InputValue<RemoveOrderGiftCardRequestInput>; };
