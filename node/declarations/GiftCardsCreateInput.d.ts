import type { InputValue } from '../runtime.js';
import type { CreateGiftCardRequestInput } from './CreateGiftCardRequestInput.js';

export type GiftCardsCreateInput = { "X-Request-Id"?: InputValue<string>; /** minLength: 1. maxLength: 255. */ "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateGiftCardRequestInput>; };
