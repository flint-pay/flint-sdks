import type { InputValue } from '../runtime.js';
import type { CreateGiftCardFundingDispositionRequestInput } from './CreateGiftCardFundingDispositionRequestInput.js';

export type GiftCardFundingDispositionsCreateInput = { "X-Request-Id"?: InputValue<string>; /** minLength: 1. maxLength: 255. */ "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateGiftCardFundingDispositionRequestInput>; };
