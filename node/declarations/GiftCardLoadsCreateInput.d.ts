import type { InputValue } from '../runtime.js';
import type { CreateGiftCardLoadRequestInput } from './CreateGiftCardLoadRequestInput.js';

export type GiftCardLoadsCreateInput = { "X-Request-Id"?: InputValue<string>; "gift_card_id": InputValue<string>; /** minLength: 1. maxLength: 255. */ "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateGiftCardLoadRequestInput>; };
