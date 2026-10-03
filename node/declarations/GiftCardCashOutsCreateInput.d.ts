import type { InputValue } from '../runtime.js';
import type { CreateGiftCardCashOutRequestInput } from './CreateGiftCardCashOutRequestInput.js';

export type GiftCardCashOutsCreateInput = { "X-Request-Id"?: InputValue<string>; "gift_card_id": InputValue<string>; /** minLength: 1. maxLength: 255. */ "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateGiftCardCashOutRequestInput>; };
