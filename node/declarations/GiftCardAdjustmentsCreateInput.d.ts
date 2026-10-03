import type { InputValue } from '../runtime.js';
import type { CreateGiftCardAdjustmentRequestInput } from './CreateGiftCardAdjustmentRequestInput.js';

export type GiftCardAdjustmentsCreateInput = { "X-Request-Id"?: InputValue<string>; "gift_card_id": InputValue<string>; /** minLength: 1. maxLength: 255. */ "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateGiftCardAdjustmentRequestInput>; };
